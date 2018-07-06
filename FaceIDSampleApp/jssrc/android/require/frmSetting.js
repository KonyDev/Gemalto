define("frmSetting", function() {
    return function(controller) {
        function addWidgetsfrmSetting() {
            this.setDefaultUnit(kony.flex.DP);
            var faceid = new com.konymp.faceid({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0%",
                "id": "faceid",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "0%"
            }, {}, {});
            faceid.enrollTimeout = 3000;
            faceid.verifyTimeout = 3000;
            faceid.licenseString = "Enter License Entitlement  String";
            faceid.tokenName = "login";
            faceid.enrollQualityThreshold = 50;
            faceid.livenessMode = "LIVENESS_PASSIVE";
            faceid.serverURL = "Enter Server URL";
            faceid.tokenConfigType = "CLEAR_TEXT";
            faceid.livenessThreshold = 0;
            faceid.blinkTimeout = 2000;
            faceid.secret = "12345678912345678900";
            faceid.verifyQualityThreshold = 50;
            faceid.pin = "1234";
            faceid.matchingThreshold = 48;
            faceid.onEnrollSuccess = controller.AS_UWI_g21723be3438425cb74a4e894a34ce28;
            faceid.onInitSuccess = controller.AS_UWI_eca5d54e884547aa9baf458e3cf19577;
            faceid.onVerifySuccess = controller.AS_UWI_i0c11aa167f34747b05e7038b7ae7900;
            faceid.onUnenrollSuccess = controller.AS_UWI_c4c689d3eaef451f94ad244ebfe76969;
            faceid.onInitFailure = controller.AS_UWI_e6cc9309a5cf4adbae1843826938aa12;
            faceid.onVerifyFailure = controller.AS_UWI_fe28bfdb06c64a469e6ff986ec78c4aa;
            faceid.onEnrollFailure = controller.AS_UWI_d393c5c5ff3247a48068f0bd3aed14e2;
            faceid.onUnenrollFailure = controller.AS_UWI_gdb741665c2742fcbc96859190e9ace9;
            var btnEnroll = new kony.ui.Button({
                "centerX": "50%",
                "height": "50dp",
                "id": "btnEnroll",
                "isVisible": true,
                "onClick": controller.AS_Button_f8047ea7856644cea48e9ef6f6294a40,
                "skin": "konympGemaltoSknBtn",
                "text": "Enroll your face",
                "top": "40%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnUnEnroll = new kony.ui.Button({
                "centerX": "50%",
                "height": "50dp",
                "id": "btnUnEnroll",
                "isVisible": true,
                "onClick": controller.AS_Button_e90012699991477b99ed15a721777f0a,
                "skin": "konympSamplesknBtnDisable",
                "text": "Unenroll your face",
                "top": "55%",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
                "skin": "konympSamplesknFlxCream0f8409a8792ff4c",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxAlert.setDefaultUnit(kony.flex.DP);
            var lblAlertHead = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAlertHead",
                "isVisible": true,
                "skin": "CopydefLabel0f505e3090e8b45",
                "text": "Alert",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAlertMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAlertMessage",
                "isVisible": true,
                "skin": "konympSamplesknLblBlackSmall0g95ccf71f8fe4a",
                "text": "Face Enrolled Successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "35%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "skin": "konympSamplesknFlxWhiteBorder0i790edca884f4c",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOK.setDefaultUnit(kony.flex.DP);
            var lblOK = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOK",
                "isVisible": true,
                "skin": "defLabel0b45ed440a8dc46",
                "text": "Ok",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOK.add(lblOK);
            flxAlert.add(lblAlertHead, lblAlertMessage, flxOK);
            var lblInit = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblInit",
                "isVisible": true,
                "left": "144dp",
                "skin": "CopydefLabel0a93fec6c59ca4f",
                "text": "Initialisating SDK..",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFrmHeading = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblFrmHeading",
                "isVisible": true,
                "left": "144dp",
                "skin": "CopydefLabel0a93fec6c59ca4f",
                "text": "Face - ID Settings",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            this.add(faceid, btnEnroll, btnUnEnroll, flxAlert, lblInit, lblFrmHeading);
        };
        return [{
            "addWidgets": addWidgetsfrmSetting,
            "enabledForIdleTimeout": false,
            "id": "frmSetting",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_b24b8d134d0341d9b59d43ea43c3fef0,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});