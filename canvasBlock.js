Blockly.JavaScript['init_canvas'] = function(block) {
    let colour_color = block.getFieldValue('color');
    let number_globalalpha = block.getFieldValue('globalAlpha');
    let text_x = block.getFieldValue('X');
    let text_y = block.getFieldValue('Y');
    let text_ratio = block.getFieldValue('ratio');
    // TODO: Assemble JavaScript into code variable.
    let code = `
    let right = window.document.getElementById('right');
    let canvas = window.document.getElementById('canvas');
    let context = canvas.getContext("2d");
    let devicePixelRatio = window.devicePixelRatio || 1; 
    let backingStoreRatio = context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
    let ratio = devicePixelRatio / backingStoreRatio;
    canvas.width = right.clientWidth * ratio;
    canvas.height = right.clientHeight * ratio; 
    canvas.style.backgroundColor = '${colour_color}';
    context.clearRect(-canvas.width,-canvas.height, canvas.width,canvas.height)
    context.translate(${parseInt(text_x)},${parseInt(text_y)});
    context.globalAlpha = ${number_globalalpha};
    context.rotate(${text_ratio}*Math.PI/180);
    context.save();
    `;
    return code;
};

Blockly.JavaScript['beginpath'] = function(block) {
    let value_moveto  = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    let dropdown_linecap = block.getFieldValue('lineCap');
    let dropdown_linejoin = block.getFieldValue('lineJoin');
    let value_strokestyle = Blockly.JavaScript.valueToCode(block, 'strokeStyle', Blockly.JavaScript.ORDER_NONE);
    let value_linewidth = Blockly.JavaScript.valueToCode(block, 'lineWidth', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.lineCap = '${dropdown_linecap}';
    context.lineJoin = '${dropdown_linejoin}';
    context.strokeStyle = ${value_strokestyle};
    context.lineWidth = ${value_linewidth};
    context.beginPath();
    ${value_moveto}`
    return code;
};

Blockly.JavaScript['moveto'] = function(block) {
    let value_moveto = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.moveTo(${value_x},${value_y});
    ${value_moveto}`;
    return [code,Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['lineto'] = function(block) {
    let value_lineto = Blockly.JavaScript.valueToCode(block, 'lineTo', Blockly.JavaScript.ORDER_NONE);
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    let code = `
    context.lineTo(${value_x},${value_y})
    ${value_lineto}`;
    return [code,Blockly.JavaScript.ORDER_NONE]
};

Blockly.JavaScript['stroke'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    let code =
        `
        context.stroke();
        context.restore();`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['fill'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.fill();
    context.restore();`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['closepath'] = function(block) {
    let value_fill = Blockly.JavaScript.valueToCode(block, 'fill', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.closePath()
    ${value_fill}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['beginfillpath'] = function(block) {
    let value_moveto = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    let value_fillStyle = Blockly.JavaScript.valueToCode(block, 'fillStyle', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.fillStyle = ${value_fillStyle};
    context.beginPath();
    ${value_moveto}`
    return code;
};
Blockly.JavaScript['arc'] = function(block) {
    let value_arc = Blockly.JavaScript.valueToCode(block, 'arc', Blockly.JavaScript.ORDER_NONE);
    let value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    let value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    let value_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_NONE);
    let value_startangle = Blockly.JavaScript.valueToCode(block, 'startAngle', Blockly.JavaScript.ORDER_NONE);
    let value_endangle = Blockly.JavaScript.valueToCode(block, 'endAngle', Blockly.JavaScript.ORDER_NONE);
    let value_counterclockwise = Blockly.JavaScript.valueToCode(block, 'counterclockwise', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code =`
    context.arc(${value_startx},${value_starty},${value_r},${value_startangle}/180*Math.PI,${value_endangle}/180*Math.PI,${value_counterclockwise});
    ${value_arc}
    `;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rect'] = function(block) {
    let value_react = Blockly.JavaScript.valueToCode(block, 'react', Blockly.JavaScript.ORDER_NONE);
    let value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_NONE);
    let value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_NONE);
    let value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_NONE);
    let value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.rect(${value_x1},${value_y1},${value_x2},${value_y2});
    ${value_react}
    `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['quadraticcurveto'] = function(block) {
    let value_quadraticcurveto = Blockly.JavaScript.valueToCode(block, 'quadraticCurveTo', Blockly.JavaScript.ORDER_NONE);
    let value_cpx = Blockly.JavaScript.valueToCode(block, 'cpx', Blockly.JavaScript.ORDER_NONE);
    let value_cpy = Blockly.JavaScript.valueToCode(block, 'cpy', Blockly.JavaScript.ORDER_NONE);
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.quadraticCurveTo(${value_cpx},${value_cpy},${value_x},${value_y});
    ${value_quadraticcurveto}
    `;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['arcto'] = function(block) {
    let value_arcto = Blockly.JavaScript.valueToCode(block, 'arcTo', Blockly.JavaScript.ORDER_NONE);
    let value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    let value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    let value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    let value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    let value_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.arcTo(${value_startx},${value_starty},${value_endx},${value_endy},${value_r})
    ${value_arcto}
    `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['fillfont'] = function(block) {
    let value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_NONE);
    let value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_NONE);
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    let value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    let dropdown_font = block.getFieldValue('font');
    let dropdown_textbaseline_ = block.getFieldValue('textBaseline ');
    let dropdown_textalign = block.getFieldValue('textAlign');
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.textAlign="${dropdown_textalign}"; 
    context.textBaseline="${dropdown_textbaseline_}";
    context.font="${value_size}px ${dropdown_font}";
    context.fillStyle = ${value_color};
    context.fillText(${value_font},${value_x},${value_y});
    `;
    return code;
};
Blockly.JavaScript['strokefont'] = function(block) {
    let value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_NONE);
    let value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_NONE);
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    let value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    let dropdown_font = block.getFieldValue('font');
    let dropdown_textbaseline_ = block.getFieldValue('textBaseline ');
    let dropdown_textalign = block.getFieldValue('textAlign');
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.textAlign="${dropdown_textalign}"; 
    context.textBaseline="${dropdown_textbaseline_}";
    context.font="${value_size}px ${dropdown_font}";
    context.strokeStyle = ${value_color};
    context.strokeText(${value_font},${value_x},${value_y});
    `;
    return code;
};
Blockly.JavaScript['scale'] = function(block) {
    let value_scalewidth = Blockly.JavaScript.valueToCode(block, 'scalewidth', Blockly.JavaScript.ORDER_NONE);
    let value_scaleheight = Blockly.JavaScript.valueToCode(block, 'scaleheight', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.scale(${value_scalewidth},${value_scaleheight});
    `;
    return code;
};
Blockly.JavaScript['rotate'] = function(block) {
    let value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.rotate(${value_angle}*Math.PI/180);
    `;
    return code;
};
Blockly.JavaScript['translate'] = function(block) {
    let value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    let value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.translate(${value_x},${value_y});
    `;
    return code;
};
Blockly.JavaScript['createlineargradient'] = function(block) {
    let value_createlineargradient1 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient1', Blockly.JavaScript.ORDER_NONE);
    let value_createlineargradient2 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient2', Blockly.JavaScript.ORDER_NONE);
    let value_createlineargradient3 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient3', Blockly.JavaScript.ORDER_NONE);
    let value_createlineargradient4 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient4', Blockly.JavaScript.ORDER_NONE);
    let value_createlineargradient5 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient4', Blockly.JavaScript.ORDER_NONE);
    let value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_NONE);
    let value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    let value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    let value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    let value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    (function(){
    ${value_variable}=context.createLinearGradient(${value_startx},${value_starty},${value_endx},${value_endy});
    ${value_variable}.addColorStop(${value_createlineargradient1.split(',')[0]},${value_createlineargradient1.split(',')[1]})
    ${value_variable}.addColorStop(${value_createlineargradient2.split(',')[0]},${value_createlineargradient2.split(',')[1]})
    ${value_variable}.addColorStop(${value_createlineargradient3.split(',')[0]},${value_createlineargradient3.split(',')[1]})
    ${value_variable}.addColorStop(${value_createlineargradient4.split(',')[0]},${value_createlineargradient4.split(',')[1]})
    ${value_variable}.addColorStop(${value_createlineargradient5.split(',')[0]},${value_createlineargradient5.split(',')[1]})
    return ${value_variable}
    })()
    `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['createradialgradient'] = function(block) {
    let value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_NONE);
    let value_createradialgradient1 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient1', Blockly.JavaScript.ORDER_NONE);
    let value_createradialgradient2 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient2', Blockly.JavaScript.ORDER_NONE);
    let value_createradialgradient3 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient3', Blockly.JavaScript.ORDER_NONE);
    let value_createradialgradient4 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient4', Blockly.JavaScript.ORDER_NONE);
    let value_createradialgradient5 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient5', Blockly.JavaScript.ORDER_NONE);
    let value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    let value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    let value_startr = Blockly.JavaScript.valueToCode(block, 'startR', Blockly.JavaScript.ORDER_NONE);
    let value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    let value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    let value_endr = Blockly.JavaScript.valueToCode(block, 'endR', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    let code = `
    (function(){
    ${value_variable}=context.createRadialGradient(${value_startx},${value_starty},${value_startr},${value_endx},${value_endy},${value_endr});
    ${value_variable}.addColorStop(${value_createradialgradient1.split(',')[0]},${value_createradialgradient1.split(',')[1]})
    ${value_variable}.addColorStop(${value_createradialgradient2.split(',')[0]},${value_createradialgradient2.split(',')[1]})
    ${value_variable}.addColorStop(${value_createradialgradient3.split(',')[0]},${value_createradialgradient3.split(',')[1]})
    ${value_variable}.addColorStop(${value_createradialgradient4.split(',')[0]},${value_createradialgradient4.split(',')[1]})
    ${value_variable}.addColorStop(${value_createradialgradient5.split(',')[0]},${value_createradialgradient5.split(',')[1]})
    return ${value_variable}
    })()
    `;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['addcolorstop'] = function(block) {
    let value_stop = Blockly.JavaScript.valueToCode(block, 'stop', Blockly.JavaScript.ORDER_NONE);
    let value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    let arr =[value_stop,value_color];
    // TODO: Assemble JavaScript into code variable.
    let code = arr;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE]
};
Blockly.JavaScript['globalcompositeoperation'] = function(block) {
    let dropdown_globalcompositeoperation_ = block.getFieldValue('globalCompositeOperation ');
    // TODO: Assemble JavaScript into code variable.
    let code = `
    context.globalcompositeoperation = "${dropdown_globalcompositeoperation_}";
    `;
    return code;
};