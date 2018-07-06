define({
    //Type your controller code here 
    onNavigate: function(context) {
        this.faceIDComp = context;
        this.faceIDComp.onVerifySuccess = function() {
            this.view.flxAlert.isVisible = true;
        }.bind(this);
    }
});