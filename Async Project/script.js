// configurations
const CONFIG = {
    DEBOUNCE_MS: 400, // Input debouncing delay
    TIMEOUT_MS: 3500, // per- source timeout
    SOURCES: ['A', 'B', 'C']
}

// state
const STATE ={
    currentMode: 'parallel',
    activeRequestID: 0,
    abortController: null,
    debouceTimer: null,
    totalSearches: 0,
    cancelRequests: 0,
    isSearching: false
}

// utility functions updates status display
function setStatus(message, type = 'info'){
    const e1 = document.getElementById('status');
    e1.textContent = message;
    e1.className = `status ${type}`;
}


// Updates metrics
function updateMetrics(){
    document.getElementById('totalSearches').textContent = STATE.totalSearches;
    document.getElementById('cancelledCount').textContent = STATE.cancelledRequests;
}


// Renders single source result 
function renderResource(sourceID, status, data={}){
    const sourceE1 = document.querySelector(`[data-source="${sourceID}"]`);
    sourceE1.className = `source ${status}`;

    const statusMap = {
        loading: `<div class = "loading-text"> ♻️ Loading...(${Math.round(Math.random()*1000 + 500)}ms)</div>`,
        success: `<div class = "status-text success">✅ Success (${data.duration || 0}ms)</div>` +
            (data.results || []).map(r => 
                `<div class = "result-item">
                <div class ="result-title">${r.title}</div>
                <div class = "result-meta">${r.meta}</div>
                </div>`).join(''),
        error: `<div class="status-text error">⚔️ ${data.message || 'API Error'}</div>`,
        timeout: `<div class="status-text timeout"> ⏰ Request timed out</div>`,
        cancelled: `<div class="status-text"> ♻️cancelled(Newer search actice)</div>`
    }
    sourceE1.innerHTML = `<h3>Source ${sourceID}</h3> ${statusMap[status] || '<div class = "placeholder">Ready</div>'}`;
}

const debounceSearch = (function() {
    return function(query){
        clearTimeout(STATE.debounceTimer);
        STATE.debounceTimer = setTimeout(() =>{
            if(query.trim()) executeSearch(query.trim());
        }, CONFIG.DEBOUNCE_MS);
    }
})


// API SIMULATION
function simulateApi (sourceID, query, requestId, signal){
    return new Promise((resolve, reject)=>{
        const delay = 800 + Math.random() * 4000; // 800 - 4800 ms
        const willFail = Math.random() < 0.25; // 25% chances of the promise to fail
        const timeout= setTimeout(() => {
            if(signal.aborted) return reject(new DOMException('AbortError'));  
            if(willFail){
                return reject( new Error(`Source ${sourceID} services unavailable`));
            }
            else{
                const result = [
                    {
                        title: `${query} Guide (${sourceID})`,
                        meta: 'Documentation'
                    },
                    {
                        title: `${query} Tutorial (${sourceID})`,
                        meta: 'Step-by-step'
                    }
                ]
                resolve({sourceID, result, duration: delay, requestId});
            }
        }, delay);
        signal.addEventLisner('abort', ()=>{
            clearTimeout(timeout,{once: true});
        });
    });
}


 
// Timeout wrapper using Promise.race 

function withTimeout(promise, ms){
    const timeoutPromise = new Promise((_, reject) =>{
        setTimeout(()=> reject (new Error('Timeout')), ms)
    })
    return Promise.race([promise, timeoutPromise]);
}




// Reset resources

function resetSources(){
    CONFIG.SOURCES.forEach(id => renderResource(id, idle))
}

function cancelActiveRequests(reason = 'Cancelled'){
    if(STATE.abortController){
        STATE.abortController.abort(reason);
        STATE.abortController = null;
        STATE.cancelRequests++;
        updateMetrics();
        CONFIG.SOURCES.forEach(id => renderResource(id, 'cancelled'));
        setStatus('⚔️ Search cancelled', 'Warning');
        STATE.isSearching = false;
        toggleButtons();
    }
    clearTimeout(STATE.debouceTimer);
}


// toggleButton function
function toggleButtons(){
    document.getElementById('cancelBtn').disabled = !STATE.isSearching;
    document.getElementById('searchBtn').disabled = STATE.isSearching;

}


//Search Modes
// Parallel : Promise.allSettled

async function seachParallel(query) {
    const requestId = ++ STATE.activeRequestID;
    const controller = new AbortController();
    STATE.abortController = controller;
    setStatus('♻️ parallel serach (all sourced at one)...', 'info');
    STATE.isSearching = true;
    const promises = CONFIG.SOURCES.map(async sourceID =>{
        renderResource(sourceID, 'loading');
        try{
            const result = await withTimeout(simulateApi(sourceID, query, requestId, controller.signal),
                CONFIG.TIMEOUT_MS);
            return requestId === STATE.activeRequestID ? result : null;
        }
        catch(error){
            return(sourceID, error)
        }
    });
    const result = await Promise.allSettled(promises);
    result.forEach((result, i) =>{
        const sourceID = CONFIG.SOURCES[i];
        if(result.status == 'fulfilled' && result.value){
            renderResource(sourceID, 'success', result.value)
        }
        else{
            const error = result.reason?.error;
            if(error?.message === 'Timeout'){
                renderResource(sourceID, 'timeout');
            }
            else if(error?.name === 'AbortError'){
                renderResource(sourceID, 'cancelled')
            }
            else{
                renderResource(sourceID, 'error', {message: error?.message})
            }
        }
    });
    STATE.isSearching = false;
    toggleButtons();
    setStatus('✅ parallel complete (partial ok)', 'success');
    STATE.totalSearches++;
    updateMetrics();
}


async function seachSequential(query) {
    const requestId = ++ STATE.activeRequestID;
    const controller = new AbortController();
    STATE.abortController = controller;
    setStatus('♻️ Sequential search (one-by-one)...', 'info');
    STATE.isSearching = true;
    toggleButtons();
    for(const sourceID of CONFIG.SOURCES){
        if(requestId !== STATE.activeRequestID) break;
        renderResource(sourceID, 'loading');
        try{
            const result = await withTimeout(simulateApi(sourceID, query, requestId, controller.signal),
            CONFIG.TIMEOUT_MS);
            if(requestId === STATE.activeRequestID){
                renderResource(sourceID, 'success', result);
            }
        }
        catch(error){
            if(requestId === STATE.activeRequestID){
                if(error.message === 'Timeout'){
                    renderResource(sourceID, 'Timeout')
                }
                else if(error.name === 'AbortError'){
                    renderResource(sourceID, 'Cancelled')
                }
                else{
                    renderResource(sourceID, 'error', {message: error.message})
                }
            }

        }
    }
    STATE.isSearching = false;
    toggleButtons();
    setStatus('✅ Sequential complete', 'success');
    STATE.totalSearches++;
    updateMetrics();
}



async function searchFastest(query) {
    const requestId = ++STATE.activeRequestID;
    setStatus('⚡️ Fastest result race...', 'info');
    STATE.isSearching = true;
    toggleButtons();
    const promise =CONFIG.SOURCES.map(sourceID =>{
        const ctrl = new AbortController();
        controller.set(sourceID, ctrl);
        renderResource(sourceID, 'loading');
        return withTimeout(
            simulateApi(sourceID, query, requestId, ctrl.signal),
            CONFIG.TIMEOUT_MS
        ).catch(e => ({error: e}));
    });
    try{
        const winner = await Promise.any(promises);
        if(requestId === STATE.activeRequestID){
            renderResource(winner.sourceID, 'success', winner);
            // cancel losers
            controller.forEach((ctrl, id) =>{
                if(id !== winner.sourceID){
                    ctrl.abort();
                    renderResource(id, 'cancelled');
                }
            });
            setStatus(`⚡️ ${winner.sourceID} won (${winner.duration}ms)!`, 'success');
        }
    }
    catch{
        CONFIG.SOURCES.forEach(id => renderSource(id, 'error'));
        setStatus('❌ All sources failed', 'error');
    }
    STATE.isSearching = false;
    toggleButtons();
    STATE.totalSearches++;
    updateMetrics();
}