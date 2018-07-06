define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.faceid", "faceid", "faceidController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "faceid",
            "name": "com.konymp.faceid"
        });
        kony.mvc.registry.add("frmLogin", "frmLogin", "frmLoginController");
        kony.mvc.registry.add("frmSetting", "frmSetting", "frmSettingController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmSetting").navigate();
    }
});