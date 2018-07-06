define({ 

  //This function will used to navigate to login form with faceid context
  navigateToLoginForm : function(){
    this.view.flxAlert.isVisible = false;
    var rtf = new kony.mvc.Navigation("frmLogin");
    rtf.navigate(this.view.faceid);
  },
  initSucess : function(){
    this.view.lblInit.isVisible = false;
    this.view.btnEnroll.isVisible =true;
    this.view.btnUnEnroll.isVisible = true;
    this.view.lblFrmHeading.isVisible = true;
    this.view.forceLayout();
    if(kony.store.getItem("isInitialisedGemalto") == null || kony.store.getItem("isInitialisedGemalto") == "NO"){
      kony.store.setItem("isInitialisedGemalto", "Yes");
      this.createAlert("Initialization Success", function(){this.view.flxAlert.isVisible =false;});
    }
    this.view.forceLayout();
  },


  createAlert : function(message,handle){
    this.view.flxAlert.isVisible = true;
    this.view.lblAlertMessage.text = message;
    this.view.flxOK.onTouchStart = handle.bind(this);
    this.view.forceLayout();


  },
  emptyFuction : function(){},
  enrollSuccess : function(){
    kony.store.setItem("isEnrollGemaltoFaceID", "YES");
    this.disableButton();
    this.createAlert("Face successfully Enrolled", this.navigateToLoginForm);
    this.view.forceLayout();
  },
  enrolledValue : function(){
    this.getEnrolledValue = kony.store.getItem("isEnrollGemaltoFaceID");
    if(this.getEnrolledValue === null ||this.getEnrolledValue === undefined ){
      kony.store.setItem("isEnrollGemaltoFaceID", "NO");
      this.getEnrolledValue = "NO";
    }
    this.view.forceLayout();
  },

  disableButton : function(){
    this.getEnrolledValue  = kony.store.getItem("isEnrollGemaltoFaceID");
    if(this.getEnrolledValue == "NO" || this.getEnrolledValue === null ||this.getEnrolledValue === undefined ){
      this.view.btnUnEnroll.onClick =  function(){}.bind(this);
      this.view.btnUnEnroll.skin = "konympSamplesknBtnDisable";
      this.view.btnEnroll.skin = "konympGemaltoSknBtn";
      this.view.btnEnroll.onClick = function(){this.view.faceid.enroll();}.bind(this);
    }
    else if(this.getEnrolledValue == "YES"){
      this.view.btnUnEnroll.onClick = function(){this.view.faceid.unenroll();}.bind(this);
      this.view.btnEnroll.onClick = function(){}.bind(this);
      this.view.btnEnroll.skin = "konympSamplesknBtnDisable";
      this.view.btnUnEnroll.skin = "konympGemaltoSknBtn";
    }
    this.view.forceLayout();
  },

  unEnrollSuccess : function(){
    kony.store.setItem("isEnrollGemaltoFaceID", "NO");
    this.disableButton();
    this.createAlert("Face successfully Unenrolled", function(){this.view.flxAlert.isVisible =false;});
    this.view.forceLayout();
  }

});

