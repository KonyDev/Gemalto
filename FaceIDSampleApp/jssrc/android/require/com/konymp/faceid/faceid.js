define(function() {
    return function(controller) {
        var faceid = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "0%",
            "id": "faceid",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "postShow": controller.AS_FlexContainer_e37cad2a43704ce5a43db0cab1f2db84,
            "skin": "slFbox",
            "top": "0dp",
            "width": "0%"
        }, {}, {});
        faceid.setDefaultUnit(kony.flex.DP);
        faceid.add();
        return faceid;
    }
})