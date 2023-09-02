function welcome() {
    let welcome_text = '由于Github访问过慢'
    if (document.referrer !== '') {
        let referrer = document.referrer.split("/")[2];
        welcome_text = "欢迎你，来自" + referrer.toUpperCase() + "的用户！";//获取用户来源域名
    }
    swal({
        title: " 重要提示！",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "前往",
        text: welcome_text + '\n博客已迁移，请访问：\nalbus-tim-brown.gitee.io',//欢迎文本，可自行修改
    }).then(function (isConfirm) {
        if (isConfirm) {
            window.location.href = "https://albus-tim-brown.gitee.io";
        }
    });
}
$(document).ready(() => {//若未引用JQuery，请引用
    welcome()
})