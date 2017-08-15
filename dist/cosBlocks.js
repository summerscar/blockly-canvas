"use strict";

Blockly.Blocks['init_canvas'] = {
    init: function init() {
        this.appendDummyInput().appendField("初始化").appendField("背景色").appendField(new Blockly.FieldColour("#ffffff"), "color").appendField("全局透明").appendField(new Blockly.FieldNumber(1, 0, 1, 0.01), "globalAlpha").appendField("合成方式").appendField(new Blockly.FieldDropdown([["source-over", "source-over"], ["source-atop", "source-atop"], ["source-in", "source-in"], ["source-out", "source-out"], ["destination-over", "destination-over"], ["destination-atop", "destination-atop"], ["destination-in", "destination-in"], ["destination-out", "destination-out"], ["lighter", "lighter"], ["copy", "copy"], ["xor", "xor"]]), "globalCompositeOperation ").appendField("中心点").appendField(new Blockly.FieldTextInput("0"), "X").appendField(new Blockly.FieldTextInput("0"), "Y").appendField("旋转").appendField(new Blockly.FieldTextInput("0"), "ratio");
        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("初始化Canvas");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['beginpath'] = {
    init: function init() {
        this.appendValueInput("moveTo").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("beginPath");
        this.appendDummyInput().appendField("端点样式").appendField(new Blockly.FieldDropdown([["butt", "butt"], ["round", "round"], ["square", "square"]]), "lineCap");
        this.appendDummyInput().appendField("折点样式").appendField(new Blockly.FieldDropdown([["miter", "miter"], ["round", "round"], ["bevel", "bevel"]]), "lineJoin");
        this.appendValueInput("strokeStyle").setCheck("Colour").setAlign(Blockly.ALIGN_CENTRE).appendField("线条颜色");
        this.appendValueInput("lineWidth").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("线条宽度");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['moveto'] = {
    init: function init() {
        this.appendValueInput("moveTo").setCheck(null).appendField("moveTo");
        this.appendValueInput("X").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("X");
        this.appendValueInput("Y").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("Y");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['lineto'] = {
    init: function init() {
        this.appendValueInput("lineTo").setCheck(null).appendField("lineTo");
        this.appendValueInput("X").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("X");
        this.appendValueInput("Y").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("Y");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(60);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['stroke'] = {
    init: function init() {
        this.appendDummyInput().appendField("stroke");
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(225);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['fill'] = {
    init: function init() {
        this.appendDummyInput().appendField("fill");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['closepath'] = {
    init: function init() {
        this.appendValueInput("fill").setCheck(null).appendField("closePath");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("closePath");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['beginfillpath'] = {
    init: function init() {
        this.appendValueInput("moveTo").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("beginFillPath");
        this.appendValueInput("fillStyle").setCheck("Colour").setAlign(Blockly.ALIGN_CENTRE).appendField("填充颜色");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['arc'] = {
    init: function init() {
        this.appendValueInput("arc").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("弧");
        this.appendValueInput("startX").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("X");
        this.appendValueInput("startY").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("Y");
        this.appendValueInput("R").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("R");
        this.appendValueInput("startAngle").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("起始角");
        this.appendValueInput("endAngle").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("结束角");
        this.appendValueInput("counterclockwise").setCheck("Boolean").setAlign(Blockly.ALIGN_CENTRE).appendField("方向");
        this.setOutput(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['rect'] = {
    init: function init() {
        this.appendValueInput("react").setCheck(null).appendField("矩形");
        this.appendValueInput("X1").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("X1");
        this.appendValueInput("Y1").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("Y1");
        this.appendValueInput("X2").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("X2");
        this.appendValueInput("Y2").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("Y2");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['quadraticcurveto'] = {
    init: function init() {
        this.appendValueInput("quadraticCurveTo").setCheck(null).appendField("二次贝塞尔曲线");
        this.appendValueInput("cpx").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("控制点 X");
        this.appendValueInput("cpy").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("控制点 Y");
        this.appendValueInput("X").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("结束点X");
        this.appendValueInput("Y").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("结束点Y");
        this.setOutput(true, null);
        this.setColour(0);
        this.setTooltip("context.quadraticCurveTo(cpx,cpy,x,y);");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['arcto'] = {
    init: function init() {
        this.appendValueInput("arcTo").setCheck(null).appendField("切线弧");
        this.appendValueInput("startX").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("起点 X");
        this.appendValueInput("startY").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("起点 Y");
        this.appendValueInput("endX").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("终点X");
        this.appendValueInput("endY").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("终点Y");
        this.appendValueInput("R").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("半径");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("context.arcTo(x1,y1,x2,y2,r);");
        this.setHelpUrl("http://www.runoob.com/tags/canvas-arcto.html");
    }
};
Blockly.Blocks['font'] = {
    init: function init() {
        this.appendValueInput("font").setCheck("String").setAlign(Blockly.ALIGN_CENTRE).appendField("文本");
        this.appendValueInput("size").setCheck("Number").setAlign(Blockly.ALIGN_CENTRE).appendField("字体大小");
        this.appendValueInput("X").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("X");
        this.appendValueInput("Y").setCheck(null).setAlign(Blockly.ALIGN_CENTRE).appendField("Y");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("字体").appendField(new Blockly.FieldDropdown([["Arial", "Arial"], ["Microsoft YaHei", "Microsoft YaHei"]]), "font");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("水平对齐").appendField(new Blockly.FieldDropdown([["alphabetic", "alphabetic"], ["top", "top"], ["hanging", "hanging"], ["middle", "middle"], ["ideographic", "ideographic"], ["bottom", "bottom"]]), "textBaseline ");
        this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("水平对齐").appendField(new Blockly.FieldDropdown([["start", "start"], ["end", "end"], ["center", "center"], ["left", "left"], ["right", "right"]]), "textAlign");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['scale'] = {
    init: function init() {
        this.appendDummyInput().appendField("缩放");
        this.appendValueInput("scalewidth").setCheck("Number").appendField("scaleWidth");
        this.appendValueInput("scaleheight").setCheck("Number").appendField("scaleHeight");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(285);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['rotate'] = {
    init: function init() {
        this.appendDummyInput().appendField("旋转");
        this.appendValueInput("angle").setCheck("Number").appendField("角度");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['translate'] = {
    init: function init() {
        this.appendDummyInput().appendField("重映射原点");
        this.appendValueInput("X").setCheck("Number").appendField("X");
        this.appendValueInput("Y").setCheck("Number").appendField("Y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//# sourceMappingURL=cosBlocks.js.map