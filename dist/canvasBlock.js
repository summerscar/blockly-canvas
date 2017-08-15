'use strict';

Blockly.JavaScript['init_canvas'] = function (block) {
    var colour_color = block.getFieldValue('color');
    var number_globalalpha = block.getFieldValue('globalAlpha');
    var text_x = block.getFieldValue('X');
    var text_y = block.getFieldValue('Y');
    var text_ratio = block.getFieldValue('ratio');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    let right = window.document.getElementById(\'right\');\n    let canvas = window.document.getElementById(\'canvas\');\n    let context = canvas.getContext("2d");\n    let devicePixelRatio = window.devicePixelRatio || 1; \n    let backingStoreRatio = context.webkitBackingStorePixelRatio ||\n        context.mozBackingStorePixelRatio ||\n        context.msBackingStorePixelRatio ||\n        context.oBackingStorePixelRatio ||\n        context.backingStorePixelRatio || 1;\n    let ratio = devicePixelRatio / backingStoreRatio;\n    canvas.width = right.clientWidth * ratio;\n    canvas.height = right.clientHeight * ratio; \n    canvas.style.backgroundColor = \'' + colour_color + '\';\n    context.clearRect(-canvas.width,-canvas.height, canvas.width,canvas.height)\n    context.translate(' + parseInt(text_x) + ',' + parseInt(text_y) + ');\n    context.globalAlpha = ' + number_globalalpha + ';\n    context.rotate(' + text_ratio + '*Math.PI/180);\n    context.save();\n    ';
    return code;
};

Blockly.JavaScript['beginpath'] = function (block) {
    var value_moveto = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    var dropdown_linecap = block.getFieldValue('lineCap');
    var dropdown_linejoin = block.getFieldValue('lineJoin');
    var value_strokestyle = Blockly.JavaScript.valueToCode(block, 'strokeStyle', Blockly.JavaScript.ORDER_NONE);
    var value_linewidth = Blockly.JavaScript.valueToCode(block, 'lineWidth', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.lineCap = \'' + dropdown_linecap + '\';\n    context.lineJoin = \'' + dropdown_linejoin + '\';\n    context.strokeStyle = ' + value_strokestyle + ';\n    context.lineWidth = ' + value_linewidth + ';\n    context.beginPath();\n    ' + value_moveto;
    return code;
};

Blockly.JavaScript['moveto'] = function (block) {
    var value_moveto = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.moveTo(' + value_x + ',' + value_y + ');\n    ' + value_moveto;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['lineto'] = function (block) {
    var value_lineto = Blockly.JavaScript.valueToCode(block, 'lineTo', Blockly.JavaScript.ORDER_NONE);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    var code = '\n    context.lineTo(' + value_x + ',' + value_y + ')\n    ' + value_lineto;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['stroke'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n        context.stroke();\n        context.restore();';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['fill'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.fill();\n    context.restore();';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['closepath'] = function (block) {
    var value_fill = Blockly.JavaScript.valueToCode(block, 'fill', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.closePath()\n    ' + value_fill;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['beginfillpath'] = function (block) {
    var value_moveto = Blockly.JavaScript.valueToCode(block, 'moveTo', Blockly.JavaScript.ORDER_NONE);
    var value_fillStyle = Blockly.JavaScript.valueToCode(block, 'fillStyle', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.fillStyle = ' + value_fillStyle + ';\n    context.beginPath();\n    ' + value_moveto;
    return code;
};
Blockly.JavaScript['arc'] = function (block) {
    var value_arc = Blockly.JavaScript.valueToCode(block, 'arc', Blockly.JavaScript.ORDER_NONE);
    var value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    var value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    var value_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_NONE);
    var value_startangle = Blockly.JavaScript.valueToCode(block, 'startAngle', Blockly.JavaScript.ORDER_NONE);
    var value_endangle = Blockly.JavaScript.valueToCode(block, 'endAngle', Blockly.JavaScript.ORDER_NONE);
    var value_counterclockwise = Blockly.JavaScript.valueToCode(block, 'counterclockwise', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.arc(' + value_startx + ',' + value_starty + ',' + value_r + ',' + value_startangle + '/180*Math.PI,' + value_endangle + '/180*Math.PI,' + value_counterclockwise + ');\n    ' + value_arc + '\n    ';
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rect'] = function (block) {
    var value_react = Blockly.JavaScript.valueToCode(block, 'react', Blockly.JavaScript.ORDER_NONE);
    var value_x1 = Blockly.JavaScript.valueToCode(block, 'X1', Blockly.JavaScript.ORDER_NONE);
    var value_y1 = Blockly.JavaScript.valueToCode(block, 'Y1', Blockly.JavaScript.ORDER_NONE);
    var value_x2 = Blockly.JavaScript.valueToCode(block, 'X2', Blockly.JavaScript.ORDER_NONE);
    var value_y2 = Blockly.JavaScript.valueToCode(block, 'Y2', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.rect(' + value_x1 + ',' + value_y1 + ',' + value_x2 + ',' + value_y2 + ');\n    ' + value_react + '\n    ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['quadraticcurveto'] = function (block) {
    var value_quadraticcurveto = Blockly.JavaScript.valueToCode(block, 'quadraticCurveTo', Blockly.JavaScript.ORDER_NONE);
    var value_cpx = Blockly.JavaScript.valueToCode(block, 'cpx', Blockly.JavaScript.ORDER_NONE);
    var value_cpy = Blockly.JavaScript.valueToCode(block, 'cpy', Blockly.JavaScript.ORDER_NONE);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.quadraticCurveTo(' + value_cpx + ',' + value_cpy + ',' + value_x + ',' + value_y + ');\n    ' + value_quadraticcurveto + '\n    ';
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['arcto'] = function (block) {
    var value_arcto = Blockly.JavaScript.valueToCode(block, 'arcTo', Blockly.JavaScript.ORDER_NONE);
    var value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    var value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    var value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    var value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    var value_r = Blockly.JavaScript.valueToCode(block, 'R', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.arcTo(' + value_startx + ',' + value_starty + ',' + value_endx + ',' + value_endy + ',' + value_r + ')\n    ' + value_arcto + '\n    ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['fillfont'] = function (block) {
    var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_NONE);
    var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_NONE);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    var dropdown_font = block.getFieldValue('font');
    var dropdown_textbaseline_ = block.getFieldValue('textBaseline ');
    var dropdown_textalign = block.getFieldValue('textAlign');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.textAlign="' + dropdown_textalign + '"; \n    context.textBaseline="' + dropdown_textbaseline_ + '";\n    context.font="' + value_size + 'px ' + dropdown_font + '";\n    context.fillStyle = ' + value_color + ';\n    context.fillText(' + value_font + ',' + value_x + ',' + value_y + ');\n    ';
    return code;
};
Blockly.JavaScript['strokefont'] = function (block) {
    var value_font = Blockly.JavaScript.valueToCode(block, 'font', Blockly.JavaScript.ORDER_NONE);
    var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_NONE);
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    var dropdown_font = block.getFieldValue('font');
    var dropdown_textbaseline_ = block.getFieldValue('textBaseline ');
    var dropdown_textalign = block.getFieldValue('textAlign');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.textAlign="' + dropdown_textalign + '"; \n    context.textBaseline="' + dropdown_textbaseline_ + '";\n    context.font="' + value_size + 'px ' + dropdown_font + '";\n    context.strokeStyle = ' + value_color + ';\n    context.strokeText(' + value_font + ',' + value_x + ',' + value_y + ');\n    ';
    return code;
};
Blockly.JavaScript['scale'] = function (block) {
    var value_scalewidth = Blockly.JavaScript.valueToCode(block, 'scalewidth', Blockly.JavaScript.ORDER_NONE);
    var value_scaleheight = Blockly.JavaScript.valueToCode(block, 'scaleheight', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.scale(' + value_scalewidth + ',' + value_scaleheight + ');\n    ';
    return code;
};
Blockly.JavaScript['rotate'] = function (block) {
    var value_angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.rotate(' + value_angle + '*Math.PI/180);\n    ';
    return code;
};
Blockly.JavaScript['translate'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_NONE);
    var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.translate(' + value_x + ',' + value_y + ');\n    ';
    return code;
};
Blockly.JavaScript['createlineargradient'] = function (block) {
    var value_createlineargradient1 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient1', Blockly.JavaScript.ORDER_NONE);
    var value_createlineargradient2 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient2', Blockly.JavaScript.ORDER_NONE);
    var value_createlineargradient3 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient3', Blockly.JavaScript.ORDER_NONE);
    var value_createlineargradient4 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient4', Blockly.JavaScript.ORDER_NONE);
    var value_createlineargradient5 = Blockly.JavaScript.valueToCode(block, 'createLinearGradient4', Blockly.JavaScript.ORDER_NONE);
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_NONE);
    var value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    var value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    var value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    var value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    (function(){\n    ' + value_variable + '=context.createLinearGradient(' + value_startx + ',' + value_starty + ',' + value_endx + ',' + value_endy + ');\n    ' + value_variable + '.addColorStop(' + value_createlineargradient1.split(',')[0] + ',' + value_createlineargradient1.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createlineargradient2.split(',')[0] + ',' + value_createlineargradient2.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createlineargradient3.split(',')[0] + ',' + value_createlineargradient3.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createlineargradient4.split(',')[0] + ',' + value_createlineargradient4.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createlineargradient5.split(',')[0] + ',' + value_createlineargradient5.split(',')[1] + ')\n    return ' + value_variable + '\n    })()\n    ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['createradialgradient'] = function (block) {
    var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_NONE);
    var value_createradialgradient1 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient1', Blockly.JavaScript.ORDER_NONE);
    var value_createradialgradient2 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient2', Blockly.JavaScript.ORDER_NONE);
    var value_createradialgradient3 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient3', Blockly.JavaScript.ORDER_NONE);
    var value_createradialgradient4 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient4', Blockly.JavaScript.ORDER_NONE);
    var value_createradialgradient5 = Blockly.JavaScript.valueToCode(block, 'createRadialGradient5', Blockly.JavaScript.ORDER_NONE);
    var value_startx = Blockly.JavaScript.valueToCode(block, 'startX', Blockly.JavaScript.ORDER_NONE);
    var value_starty = Blockly.JavaScript.valueToCode(block, 'startY', Blockly.JavaScript.ORDER_NONE);
    var value_startr = Blockly.JavaScript.valueToCode(block, 'startR', Blockly.JavaScript.ORDER_NONE);
    var value_endx = Blockly.JavaScript.valueToCode(block, 'endX', Blockly.JavaScript.ORDER_NONE);
    var value_endy = Blockly.JavaScript.valueToCode(block, 'endY', Blockly.JavaScript.ORDER_NONE);
    var value_endr = Blockly.JavaScript.valueToCode(block, 'endR', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    (function(){\n    ' + value_variable + '=context.createRadialGradient(' + value_startx + ',' + value_starty + ',' + value_startr + ',' + value_endx + ',' + value_endy + ',' + value_endr + ');\n    ' + value_variable + '.addColorStop(' + value_createradialgradient1.split(',')[0] + ',' + value_createradialgradient1.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createradialgradient2.split(',')[0] + ',' + value_createradialgradient2.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createradialgradient3.split(',')[0] + ',' + value_createradialgradient3.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createradialgradient4.split(',')[0] + ',' + value_createradialgradient4.split(',')[1] + ')\n    ' + value_variable + '.addColorStop(' + value_createradialgradient5.split(',')[0] + ',' + value_createradialgradient5.split(',')[1] + ')\n    return ' + value_variable + '\n    })()\n    ';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['addcolorstop'] = function (block) {
    var value_stop = Blockly.JavaScript.valueToCode(block, 'stop', Blockly.JavaScript.ORDER_NONE);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_NONE);
    var arr = [value_stop, value_color];
    // TODO: Assemble JavaScript into code variable.
    var code = arr;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['globalcompositeoperation'] = function (block) {
    var dropdown_globalcompositeoperation_ = block.getFieldValue('globalCompositeOperation ');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n    context.globalcompositeoperation = "' + dropdown_globalcompositeoperation_ + '";\n    ';
    return code;
};
//# sourceMappingURL=canvasBlock.js.map