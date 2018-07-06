define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var btnVerify = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "50dp",
                "id": "btnVerify",
                "isVisible": true,
                "onClick": controller.AS_Button_b665262ce6c749fe91212e2e33142fc2,
                "skin": "konympGemaltoSknBtn",
                "text": "Verify your face",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var flxAlert = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxAlert",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "konympSamplesknFlxCream0ba49e6fe567d4a",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxAlert.setDefaultUnit(kony.flex.DP);
            var lblAlertHead = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAlertHead",
                "isVisible": true,
                "skin": "CopydefLabel0b977ee14143e4b",
                "text": "Alert",
                "textStyle": {},
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAlertMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAlertMessage",
                "isVisible": true,
                "skin": "konympSamplesknLblBlackSmall0cd2218b6755944",
                "text": "Face Verified. Login Successful.",
                "textStyle": {},
                "top": "35%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxOK = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxOK",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "onTouchStart": controller.AS_FlexContainer_a07ca73a894b483cb07356fef6160c5d,
                "skin": "konympSamplesknFlxWhiteBorder0gd572f3aa1a941",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOK.setDefaultUnit(kony.flex.DP);
            var lblOK = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOK",
                "isVisible": true,
                "skin": "defLabel0jb88acc739974d",
                "text": "Ok",
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxOK.add(lblOK);
            flxAlert.add(lblAlertHead, lblAlertMessage, flxOK);
            this.add(btnVerify, flxAlert);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_f3d63326c9954f70bc7e3e89b980018d,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});