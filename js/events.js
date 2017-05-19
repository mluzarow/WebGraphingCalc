function initializeButtonEvents () {
    var buttons = document.getElementsByClassName ("btn_base");

    for (var i = 0; i < buttons.length; i++) {
        buttons [i].addEventListener ("mousedown", eval (buttons [i].id + "_click"), false);
    }
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