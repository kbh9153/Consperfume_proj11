const id = document.getElementById("id");
const pw = document.getElementById("pw");
const name = document.getElementById("name");
const checkPw = document.getElementById("checkPw");
const email = document.getElementById("email");
const submit = document.getElementById("submit");

const idCheck = /^[a-zA-Z0-9][a-zA-Z0-9]{4,16}$/;
const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
const emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// signUpCheck 유효성 검사
function signUpCheck() {
   // id

   if (id.value == "") {
      alert("아이디를 입력하세요.");
      return false;
   }

   if (!idCheck.test(id.value)) {
      alert("아이디는 영문 대소문자 + 숫자 4 ~ 16자 조합으로 입력해야합니다.");
      return false;
   }

   if (pw.value == "") {
      alert("비밀번호를 입력하세요.");
      return false;
   }

   // password

   if (!pwCheck.test(pw.value)) {
      alert("비밀번호는 영문 대소문자 + 숫자 + 특수문자 조합으로 8 ~ 16자리 입력해야합니다.");
      return false;
   }

   if (checkPw.value !== pw.value) {
      alert("비밀번호가 일치하지 않습니다.");
      checkPw.focus();
      return false;
   }

   // name

   if (name.value == "") {
      alert("이름을 입력하세요.");
      return false;
   }

   // email

   if (email.value == "") {
      alert("이메일 주소를 입력하세요.");
      return false;
   }

   if (!emailCheck.test(email.value)) {
      alert("이메일 형식에 알맞지 않습니다.");
      return false;
   }

   // ★★★ submit ★★★
   document.join_form.submit();
}

submit.addEventListener("click", signUpCheck);
