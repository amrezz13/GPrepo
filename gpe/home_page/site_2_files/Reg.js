$(document).ready(function () {
    $(".number").each((idx, elem) => {
        $(elem).keypress(function (evt) {
            return isNumberKey(evt);
        });

    });

});
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode < 48 || charCode > 57)
        return false;

    return true;
};
(function () {
    function RegistrationController($scope) {
        $scope.rootScope = $scope;
        $scope.SaveModel = {
            Id: "", Address_GOV_Code: 0, ExamCount: 0, OBSTACLE_ID: 0, Police_Station_Code: 0, father_job: "",
            ImageFile: null, ImageFileName: "", ImageChanged: false, address: "", telephone:"",mobile:"",Token:""
        };
        $scope.Govs = [];
        $scope.ReportVisible = false;
        $scope.PoliceStations = [];
        $scope.ClientId = "c29c6a53-bf5c-4551-855c-050e453cdc9a";
        $scope.Loading = false;
        $scope.ImageContent = "";
        $scope.IsValidMobile = function (MobileNumber) {
            if (!MobileNumber || MobileNumber == "" || MobileNumber.length != 11 || !$scope.IsNumeric(MobileNumber)) {
                return false;
            }

            if (!(MobileNumber.indexOf("010") || MobileNumber.indexOf("011") || MobileNumber.indexOf("012") || MobileNumber.indexOf("015"))) {
                return false;
            }
            return true;
        };
        $scope.IsNumeric = function (str) {
            if (typeof str != "string") return false;
            return !isNaN(str) && !isNaN(parseInt(str));
        };
        $scope.IsValidEmail = function (Email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(Email).toLowerCase());
        };
        $scope.GovPoliceStations = function () {
            if (!$scope.SaveModel.Address_GOV_Code) {
                return [];
            }
            var stations = $scope.PoliceStations.filter(c => c.GovernorateId === $scope.SaveModel.Address_GOV_Code);
            return stations;
        };
        $scope.AddImage = function () {
            var fileElem = $('<input type="file" style="display:none;">');
            $(document.body).append(fileElem);
            
            fileElem.bind("change", (changeEvent) => {
                var file = changeEvent.target.files[0];
                let reader = new FileReader();
                reader.onload = (loadEvent) => {
                    $scope.SaveModel.ImageFile = loadEvent.target.result;
                    $("#StudentImage").attr("src", $scope.SaveModel.ImageFile)
                    $scope.SaveModel.ImageFileName = file.name;
                    $scope.SaveModel.ImageChanged = true;
                    StudentImage
                    $scope.$apply();
                }
                reader.readAsDataURL(file);
                fileElem.remove();
            });
            fileElem.click();
        };
        $scope.SaveForm = function (Ratify) {
            $scope.ErrorMessage = "";
            if ($scope.Loading) {
                return;
            }
            $scope.Loading = true;
            $scope.ErrorMessage = "";
            var recResponse = $("#g-recaptcha-response").val();

            if (!$scope.SaveModel.Address_GOV_Code) {
                $scope.ErrorMessage = "من فضلك أدخل محافظة العنوان";
                $scope.Loading = false;
                return;
            }
            if (!$scope.SaveModel.Police_Station_Code) {
                $scope.ErrorMessage = "من فضلك اختار القسم/ مركز الشرطة";
                $scope.Loading = false;
                return;
            }
            if (!$scope.SaveModel.father_job) {
                $scope.ErrorMessage = "من فضلك أدخل مهنة أو صناعة الوالد";
                
                $scope.Loading = false;
                return;
            }
            if ($scope.SaveModel.RequireStudentType) {
                if ($scope.SaveModel.STD_TYPE_CODE == 0) {
                    $scope.ErrorMessage = "من فضلك اختار نوع التعليم";
                    $scope.Loading = false;
                    return;
                }
                 
                
            }

            /*
            if (recResponse === undefined || recResponse === "") {
                $scope.ErrorMessage = "من فضلك اختار أنا لست روبوت";
                $scope.Loading = false;
                return;
            }
            */
            var verificationToken = $('[name=__RequestVerificationToken]').val();
            $scope.SaveModel.Ratify = Ratify;
            $.post("/home/SaveForm", {
                SaveModelString: angular.toJson($scope.SaveModel),
                RCValue: recResponse,
                __RequestVerificationToken: verificationToken
            },
                function (response) {
                    $scope.Loading = false;
                    if (response.HasError) {
                        $scope.ErrorMessage = response.ErrorMessage;
                        $scope.$apply();
                        return;
                    }
                    if (Ratify === true) {
                        window.location.reload(true);
                    }
                    $scope.SaveModel.ImageChanged = false;
                    if ($scope.SaveModel.Ratify == true) {
                        alert("تم اعتماد النموذج بنجاح");
                    }
                    else {
                        alert("تم حفظ النموذج بنجاح");
                    }
                    $scope.$apply();
                }, "json");

        };
        $scope.SaveImage = function () {
            $scope.ErrorMessage = "";
            if ($scope.Loading) {
                return;
            }
            $scope.Loading = true;
            $scope.ErrorMessage = "";
            
            
            var verificationToken = $('[name=__RequestVerificationToken]').val();
            
            $.post("/home/SaveImage", {
                SaveModelString: angular.toJson($scope.SaveModel),
                
                __RequestVerificationToken: verificationToken
            },
                function (response) {
                    $scope.Loading = false;
                    if (response.HasError) {
                        $scope.ErrorMessage = response.ErrorMessage;
                        $scope.$apply();
                        return;
                    }
                    if (response.Result == true) {
                        $scope.SaveModel.ImageChanged = false;
                        alert("تم حفظ الصورة بنجاح");
                        $scope.$apply();
                    }
                   
                
                }, "json");

        };
        $scope.PrintForm = function () {
            
           // $("#ViewerObject").attr("data", "/home/sr?id=407361035");
            $("#ViewerObject").attr("src", "/home/report?id=" + $scope.SaveModel.Id);
            $scope.ReportVisible = true;
            $(".popup-overlay").show();
        };
        $scope.BtnPrint = function () {
            window.frames["ViewerObject"].focus();
            window.frames["ViewerObject"].print();

        };
        $scope.CloseReport = function () {
            $scope.ReportVisible = false;
          
        };
        $scope.LoadData = function (SaveModel) {
            $scope.SaveModel.Id = SaveModel.Id;
            //$scope.ReadOnly = SaveModel.Ratify;
            $scope.ReadOnly = false;
            $scope.SaveModel.Address_GOV_Code = SaveModel.Address_GOV_Code;
            $scope.SaveModel.Police_Station_Code =  SaveModel.Police_Station_Code;
            $scope.SaveModel.father_job = SaveModel.father_job;
            $scope.SaveModel.ImageChanged = SaveModel.ImageChanged;
            $scope.SaveModel.ImageFile = SaveModel.ImageFile;
            $("#StudentImage").attr("src", $scope.SaveModel.ImageFile)
            $scope.SaveModel.ImageFileName = SaveModel.ImageFileName;
            $scope.SaveModel.mobile = SaveModel.mobile;
            $scope.SaveModel.telephone = SaveModel.telephone;
            $scope.SaveModel.address = SaveModel.address;
            $scope.SaveModel.ExamCount = SaveModel.ExamCount;
            $scope.SaveModel.OBSTACLE_ID = SaveModel.OBSTACLE_ID;
            $scope.SaveModel.STD_TYPE_CODE = SaveModel.STD_TYPE_CODE;
            $scope.SaveModel.STD_TYPE_DESC = SaveModel.STD_TYPE_DESC;
            $scope.SaveModel.RequireStudentType = SaveModel.RequireStudentType;
            $scope.SaveModel.Token = SaveModel.Token;
            $scope.$apply();
        };
        $scope.SaveFile = function () {
            request.uploadLargeFile();
        };
        $scope.EditImage = function () {

            return true;
          //  return !$scope.SaveModel.ImageFile || $scope.ImageFile == "" || $scope.SaveModel.ImageChanged == true ;
        };
    };
    RegistrationController.$inject = ['$scope'];
    angular.module('RegistrationModule', []).controller('RegistrationController', RegistrationController);
    
})();
