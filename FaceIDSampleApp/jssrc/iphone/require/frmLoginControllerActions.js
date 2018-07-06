define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnVerify **/
    AS_Button_b665262ce6c749fe91212e2e33142fc2: function AS_Button_b665262ce6c749fe91212e2e33142fc2(eventobject) {
        var self = this;
        this.faceIDComp.verify();
    },
    /** onTouchStart defined for flxOK **/
    AS_FlexContainer_a07ca73a894b483cb07356fef6160c5d: function AS_FlexContainer_a07ca73a894b483cb07356fef6160c5d(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSetting");
        ntf.navigate();
    },
    /** preShow defined for frmLogin **/
    AS_Form_f3d63326c9954f70bc7e3e89b980018d: function AS_Form_f3d63326c9954f70bc7e3e89b980018d(eventobject) {
        var self = this;
        this.view.flxAlert.isVisible = false;
    }
});