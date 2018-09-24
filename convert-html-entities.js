
function convertHTML(str) {
    const conv = {
        '&': '&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '"':'&quot;',
        "'":'&apos;'
    };
    let convertedStr = str.replace(/[&<>"']/g, (i)=>{
        return conv[i];
    });
    console.log(convertedStr);
    return str;
}

convertHTML("Dolce & Gabbana");
