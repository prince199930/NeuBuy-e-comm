export const regexConstants= {
     regexEmail : /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/,
     regexPassword :/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/,
     regexUsername :/^[a-zA-Z0-9!#$%&?@ "]((_|.)(?![.])|\.(?![_.])|[a-zA-Z0-9]){6,20}[a-zA-Z0-9]$/,
     regEXExpiry : /^((0[1-9])|(1[0-2]))\/*((2022)|(20[2-9][2-9]))$/,
     regName : /[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/,
     regCvv : /^([0-9]{3})$/,
     regUserCard : /\d{4}-?\d{4}-?\d{4}-?\d{4}/,
     regMobileNumber : /^\d{9}[\d]$/,
     regPincode : /^[1-9][0-9][0-9][0-9][0-9][0-9]$/
}