function initializeButtonEvents () {
    // Row #1
    document.getElementById ("btn_yEquals").addEventListener ("mousedown", btn_yEquals_click, false);
    document.getElementById ("btn_win").addEventListener ("mousedown", btn_win_click, false);
    document.getElementById ("btn_zoom").addEventListener ("mousedown", btn_zoom_click, false);
    document.getElementById ("btn_trace").addEventListener ("mousedown", btn_trace_click, false);
    document.getElementById ("btn_plot").addEventListener ("mousedown", btn_plot_click, false);
    // Row #1.5
    document.getElementById ("btn_dPad_Up").addEventListener ("mousedown", btn_dPad_Up_click, false);
    // Row #2
    document.getElementById ("btn_2nd").addEventListener ("mousedown", btn_2nd_click, false);
    document.getElementById ("btn_mode").addEventListener ("mousedown", btn_mode_click, false);
    document.getElementById ("btn_del").addEventListener ("mousedown", btn_del_click, false);
    document.getElementById ("btn_dPad_Left").addEventListener ("mousedown", btn_dPad_Left_click, false);
    document.getElementById ("btn_dPad_Right").addEventListener ("mousedown", btn_dPad_Right_click, false);
    // Row #3
    document.getElementById ("btn_alpha").addEventListener ("mousedown", btn_alpha_click, false);
    document.getElementById ("btn_x").addEventListener ("mousedown", btn_x_click, false);
    document.getElementById ("btn_stat").addEventListener ("mousedown", btn_stat_click, false);
    document.getElementById ("btn_dPad_Down").addEventListener ("mousedown", btn_dPad_Down_click, false);
    // Row #4
    document.getElementById ("btn_math").addEventListener ("mousedown", btn_math_click, false);
    document.getElementById ("btn_apps").addEventListener ("mousedown", btn_apps_click, false);
    document.getElementById ("btn_prgm").addEventListener ("mousedown", btn_prgm_click, false);
    document.getElementById ("btn_vars").addEventListener ("mousedown", btn_vars_click, false);
    document.getElementById ("btn_clr").addEventListener ("mousedown", btn_clr_click, false);
    // Row #5
    document.getElementById ("btn_exp_invert").addEventListener ("mousedown", btn_exp_invert_click, false);
    document.getElementById ("btn_sin").addEventListener ("mousedown", btn_sin_click, false);
    document.getElementById ("btn_cos").addEventListener ("mousedown", btn_cos_click, false);
    document.getElementById ("btn_tan").addEventListener ("mousedown", btn_tan_click, false);
    document.getElementById ("btn_exp").addEventListener ("mousedown", btn_exp_click, false);
    // Row #6
    document.getElementById ("btn_exp_2").addEventListener ("mousedown", btn_exp_2_click, false);
    document.getElementById ("btn_comma").addEventListener ("mousedown", btn_comma_click, false);
    document.getElementById ("btn_paran_left").addEventListener ("mousedown", btn_paran_left_click, false);
    document.getElementById ("btn_paran_right").addEventListener ("mousedown", btn_paran_right_click, false);
    document.getElementById ("btn_div").addEventListener ("mousedown", btn_div_click, false);
    // Row #7
    document.getElementById ("btn_log").addEventListener ("mousedown", btn_log_click, false);
    document.getElementById ("btn_7").addEventListener ("mousedown", btn_7_click, false);
    document.getElementById ("btn_8").addEventListener ("mousedown", btn_8_click, false);
    document.getElementById ("btn_9").addEventListener ("mousedown", btn_9_click, false);
    document.getElementById ("btn_mul").addEventListener ("mousedown", btn_mul_click, false);
    // Row #8
    document.getElementById ("btn_ln").addEventListener ("mousedown", btn_ln_click, false);
    document.getElementById ("btn_4").addEventListener ("mousedown", btn_4_click, false);
    document.getElementById ("btn_5").addEventListener ("mousedown", btn_5_click, false);
    document.getElementById ("btn_6").addEventListener ("mousedown", btn_6_click, false);
    document.getElementById ("btn_sub").addEventListener ("mousedown", btn_sub_click, false);
    // Row #9
    document.getElementById ("btn_sto").addEventListener ("mousedown", btn_sto_click, false);
    document.getElementById ("btn_1").addEventListener ("mousedown", btn_1_click, false);
    document.getElementById ("btn_2").addEventListener ("mousedown", btn_2_click, false);
    document.getElementById ("btn_3").addEventListener ("mousedown", btn_3_click, false);
    document.getElementById ("btn_add").addEventListener ("mousedown", btn_add_click, false);
    // Row #10
    document.getElementById ("btn_pwr").addEventListener ("mousedown", btn_pwr_click, false);
    document.getElementById ("btn_0").addEventListener ("mousedown", btn_0_click, false);
    document.getElementById ("btn_dec").addEventListener ("mousedown", btn_dec_click, false);
    document.getElementById ("btn_neg").addEventListener ("mousedown", btn_neg_click, false);
    document.getElementById ("btn_equ").addEventListener ("mousedown", btn_equ_click, false);
}

/******************************
**
**      Row #1
**
******************************/
function btn_yEquals_click () {
    
}
function btn_win_click () {
    
}
function btn_zoom_click () {
    testWrite ();
}
function btn_trace_click () {

}
function btn_plot_click () {

}

/******************************
**
**      Row #1.5
**
******************************/
function btn_dPad_Up_click () {
    
}

/******************************
**
**      Row #2
**
******************************/
function btn_2nd_click () {

}
function btn_mode_click () {

}
function btn_del_click () {

}
function btn_dPad_Left_click () {

}
function btn_dPad_Right_click () {

}

/******************************
**
**      Row #3
**
******************************/
function btn_alpha_click () {

}
function btn_x_click () {

}
function btn_stat_click () {

}
function btn_dPad_Down_click () {

}

/******************************
**
**      Row #4
**
******************************/
function btn_math_click () {

}
function btn_apps_click () {

}
function btn_prgm_click () {

}
function btn_vars_click () {

}
function btn_clr_click () {
    clr ()
}

/******************************
**
**      Row #5
**
******************************/
function btn_exp_invert_click () {
    addCommand (new token ('^(-1)', 3, invert));
}
function btn_sin_click () {
    addCommand (new token ('sin(', 6, sine));
}
function btn_cos_click () {
    addCommand (new token ('cos(', 6, cosine));
}
function btn_tan_click () {
    addCommand (new token ('tan(', 6, tangent));
}
function btn_exp_click () {
    addCommand (new token ('^', 3, exponent));
}

/******************************
**
**      Row #6
**
******************************/
function btn_exp_2_click () {
    addCommand (new token ('^2', 3, square));
}
function btn_comma_click () {
    addCommand (new token (',', 0));
}
function btn_paran_left_click () {
    addCommand (new token ('(', 4));
}
function btn_paran_right_click () {
    addCommand (new token (')', 4));
}
function btn_div_click () {
    addCommand (new token ('/', 2, divide));
}

/******************************
**
**      Row #7
**
******************************/
function btn_log_click () {
    addCommand (new token ('log(', 6, log));
}
function btn_7_click () {
    addCommand (new token ('7', 0));
}
function btn_8_click () {
    addCommand (new token ('8', 0));
}
function btn_9_click () {
    addCommand (new token ('9', 0));
}
function btn_mul_click () {
    addCommand (new token ('*', 2, multiply));
}

/******************************
**
**      Row #8
**
******************************/
function btn_ln_click () {
    addCommand (new token ('ln(', 6, naturalLog));
}
function btn_4_click () {
    addCommand (new token ('4', 0));
}
function btn_5_click () {
    addCommand (new token ('5', 0));
}
function btn_6_click () {
    addCommand (new token ('6', 0));
}
function btn_sub_click () {
    addCommand (new token ('-', 1, subtract));
}

/******************************
**
**      Row #9
**
******************************/
function btn_sto_click () {

}
function btn_1_click () {
    addCommand (new token ('1', 0));
}
function btn_2_click () {
    addCommand (new token ('2', 0));
}
function btn_3_click () {
    addCommand (new token ('3', 0));
}
function btn_add_click () {
    addCommand (new token ('+', 1, add));
}

/******************************
**
**      Row #10
**
******************************/
function btn_pwr_click () {
    togglePower ();
}
function btn_0_click () {
    addCommand (new token ('0', 0));
}
function btn_dec_click () {
    addCommand (new token ('.', 0));
}
function btn_neg_click () {

}
function btn_equ_click () {
    equ ();
}