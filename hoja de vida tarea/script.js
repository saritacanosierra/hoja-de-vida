var shadowHost = document.getElementById('loom-companion-mv3');
if (shadowHost) {
    var shadowRoot = shadowHost.shadowRoot;
    if (shadowRoot) {
        var sectionToRemove = shadowRoot.getElementById('shadow-host-companion');
        if (sectionToRemove) {
            sectionToRemove.parentNode.removeChild(sectionToRemove);
        }
    }
}
