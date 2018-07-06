define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onEnrollSuccess defined for faceid **/
    AS_UWI_g21723be3438425cb74a4e894a34ce28: function AS_UWI_g21723be3438425cb74a4e894a34ce28() {
        var self = this;
        this.enrollSuccess();
    },
    /** onInitSuccess defined for faceid **/
    AS_UWI_eca5d54e884547aa9baf458e3cf19577: function AS_UWI_eca5d54e884547aa9baf458e3cf19577() {
        var self = this;
        this.initSucess();
    },
    /** onVerifySuccess defined for faceid **/
    AS_UWI_i0c11aa167f34747b05e7038b7ae7900: function AS_UWI_i0c11aa167f34747b05e7038b7ae7900() {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmSetting");
        ntf.navigate();
    },
    /** onUnenrollSuccess defined for faceid **/
    AS_UWI_c4c689d3eaef451f94ad244ebfe76969: function AS_UWI_c4c689d3eaef451f94ad244ebfe76969() {
        var self = this;
        this.unEnrollSuccess();
    },
    /** onInitFailure defined for faceid **/
    AS_UWI_e6cc9309a5cf4adbae1843826938aa12: function AS_UWI_e6cc9309a5cf4adbae1843826938aa12(error) {
        var self = this;
        alert("Initialisation Failed   " + JSON.stringify(error));
    },
    /** onVerifyFailure defined for faceid **/
    AS_UWI_fe28bfdb06c64a469e6ff986ec78c4aa: function AS_UWI_fe28bfdb06c64a469e6ff986ec78c4aa(error) {
        var self = this;
        alert("Face Verification failed  " + JSON.stringify(error));
    },
    /** onEnrollFailure defined for faceid **/
    AS_UWI_d393c5c5ff3247a48068f0bd3aed14e2: function AS_UWI_d393c5c5ff3247a48068f0bd3aed14e2(error) {
        var self = this;
        alert("Face enrollment Failed  " + JSON.stringify(error));
    },
    /** onUnenrollFailure defined for faceid **/
    AS_UWI_gdb741665c2742fcbc96859190e9ace9: function AS_UWI_gdb741665c2742fcbc96859190e9ace9(error) {
        var self = this;
        alert("Unenrollment Failed  " + JSON.stringify(error));
    },
    /** onClick defined for btnEnroll **/
    AS_Button_f8047ea7856644cea48e9ef6f6294a40: function AS_Button_f8047ea7856644cea48e9ef6f6294a40(eventobject) {
        var self = this;
        this.view.faceid.enroll();
    },
    /** onClick defined for btnUnEnroll **/
    AS_Button_e90012699991477b99ed15a721777f0a: function AS_Button_e90012699991477b99ed15a721777f0a(eventobject) {
        var self = this;
        this.view.faceid.unenroll();
    },
    /** preShow defined for frmSetting **/
    AS_Form_b24b8d134d0341d9b59d43ea43c3fef0: function AS_Form_b24b8d134d0341d9b59d43ea43c3fef0(eventobject) {
        var self = this;
        this.enrolledValue();
        this.disableButton();
    },
    /** init defined for frmSetting **/
    AS_Form_j702c5c3c56545c0a8804dadcb289c14: function AS_Form_j702c5c3c56545c0a8804dadcb289c14(eventobject) {
        var self = this;
        if (kony.store.getItem("isInitialisedGemalto") !== null) {
            kony.store.setItem("isInitialisedGemalto", "NO");
        }
    }
});