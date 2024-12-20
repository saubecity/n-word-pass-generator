/*  2024-2025 Kyodai Nobuyoshi (@saubecity)
    Commercial usage not allowed

    N-word pass generator - end 24 project :P
*/

const defaultTemplateSize = [5376,3024]
var app = {};

app["style"] = {}
app["npass"] = {}

app.npass["test"] = function(name) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = defaultTemplateSize[0];
    canvas.height = defaultTemplateSize[1];
    const template = new Image(defaultTemplateSize[0], defaultTemplateSize[1])
    template.src = "templates/test1.png";
    template.onload = function() {
        ctx.drawImage(template, defaultTemplateSize[0], defaultTemplateSize[1]);
        window.open(canvas.toDataURL("image/png"))
    }
    }

    

   

app.style["default"] = function() {
    document.body.style.background = "rgb(30, 30, 30)"
}
app["cleanup"] = function() {
    document.body.innerHTML = ""
}


app["launch"] = function() {
    app.cleanup();
    app.style.default();
}


app["export"] = function (canvas) {
    const link = document.createElement('a');
    link.download = 'canvas-export.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

app.launch();