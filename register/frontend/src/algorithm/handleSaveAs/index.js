import html2canvas from 'html2canvas';
export const handleSaveAs = (name) => {
    const html = document.getElementsByTagName('HTML')[0];
    const body =  document.getElementsByTagName('BODY')[0]
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;

    const data = document.getElementById(name)
    const newWidth = data.scrollWidth - data.clientWidth


    if (newWidth > data.clientWidth){
        htmlWidth += newWidth
        bodyWidth += newWidth
    }

    html.style.width = htmlWidth + 'px'
    body.style.width = bodyWidth + 'px'

    html2canvas(data).then((canvas)=>{
        return canvas.toDataURL('image/png', 1.0)
    }).then((image)=>{
        saveAs(image, 'Schedule.png')
        html.style.width = null
        body.style.width = null
    })
}

const saveAs = (blob, fileName) =>{
    const elem = window.document.createElement('a');
    elem.href = blob
    elem.download = fileName;
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
}