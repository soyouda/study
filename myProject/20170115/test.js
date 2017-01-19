<!--// META -->
    {Context::addHtmlHeader('<meta name="viewport" content="width=device-width, user-scalable=yes">')}
<!--// LANG -->
<load target="./lang" />

    <!--// 레이아웃을 위한 설정 값들 -->
    <!--// index 모듈 체크 -->
        {@ $_is_indexmodule = ($site_module_info->module_srl === $current_module_info->module_srl)}
{@ $_body_class = array()}
{@ $_container_class = array()}
{@ $_visual_class = array()}
{@ $_selected_menu = null}
{@ $_magazine_header = false}
{@ $_onepage_header = false}
{@ $sub_header_title = $module_info->browser_title}

<!--// 초기화 -->
    {@ $_enable_slide = false}
{@ $_enable_unb = false}
{@ $_sample_slide = false}
{@ $_sample_footer = false}
<block cond="!$layout_info->use_demo">{@ $layout_info->use_demo = 'Y'}</block>
<block cond="!$layout_info->layout_type">{@ $layout_info->layout_type = 'auto'}</block>
<block cond="!$layout_info->menu_type_main">{@ $layout_info->menu_type_main = 'basic'}</block>
<block cond="!$layout_info->menu_type_sub">{@ $layout_info->menu_type_sub = 'basic'}</block>
<block cond="!$layout_info->content_fixed_width">{@ $layout_info->content_fixed_width = 'index'}</block>
<block cond="!$layout_info->menu_fixed">{@ $layout_info->menu_fixed = 'Y'}</block>
<block cond="!$layout_info->sidebar_position">{@ $layout_info->sidebar_position = 'right'}</block>
<block cond="!$layout_info->use_slide">{@ $layout_info->use_slide = 'Y'}</block>
<block cond="!$layout_info->enable_intergration_search">{@ $layout_info->enable_intergration_search = 'Y'}</block>

<block cond="$layout_info->use_slide === 'Y'">
    {@ $_enable_slide = true}
</block>
<block cond="$layout_info->use_demo === 'Y'">
    {@ $_sample_slide = true}
{@ $_enable_slide = false}
<block cond="$_is_indexmodule">{@ $_enable_slide = true}</block>
</block>
<block cond="!$layout_info->slide_img1">{@ $_sample_slide = true}</block>
<block cond="$layout_info->use_demo === 'Y'">{@ $_sample_footer = true}</block>
<block cond="$layout_info->footer_logo_img || $layout_info->footer_logo_text">{@ $_sample_footer = false}</block>

<!--// xeicon 페이지 별도 정의 -->
<block cond="$mid === 'xeicon'">
    {@ $layout_info->layout_type = 'sub'}
{@ $layout_info->menu_type_sub = 'onepage_parallax'}
{@ $layout_info->content_fixed_width = 'N'}
</block>

<!--// 콘텐츠 영역 폭 -->
<block cond="$layout_info->content_fixed_width === 'index'">
    {@ $layout_info->content_fixed_width = (!$_is_indexmodule) ? 'Y' : 'N';}
</block>
<block cond="$layout_info->content_fixed_width === 'Y'">
    {@ $_body_class[] = 'fixed-width'}
</block>
<!--// 회원, 커뮤니케이션 모듈 등 페이지에서 콘텐츠 영역 폭 고정 -->
    {@ $_fixed_width_act = array(
    'dispMemberSignUpForm',
    'dispMemberLoginForm',
    'dispMemberFindAccount',
    'dispMemberInfo',
    'dispMemberModifyPassword',
    'dispMemberModifyEmailAddress',
    'dispMemberModifyInfo',
    'dispMemberLeave',
    'dispMemberScrappedDocument',
    'dispMemberSavedDocument',
    'dispMemberOwnDocument',
    'dispCommunicationFriend',
    'dispCommunicationMessages',
    'dispNcenterliteUserConfig',
    'dispNcenterliteNotifyList',
    'dispLoginxeclientListProvider',
    'dispAjaxboardNotificationConfig',
    'IS'
)}
<block cond="in_array($act, $_fixed_width_act)">
    {@ $_body_class[] = 'fixed-width'}
{@ $layout_info->sidebar_position = 'none'}
{@ $sub_header_title = 'Membership'}
{@ $layout_info->use_demo = 'N'}
<block cond="$act === 'IS'">{@ $sub_header_title = 'Search'}</block>
</block>

<!--// 레이아웃 타입 -->
<block cond="$layout_info->layout_type === 'auto'">
    {@ $layout_info->layout_type = ($_is_indexmodule) ? 'main' : 'sub';}
</block>
{@ $_body_class[] = $layout_info->layout_type}
<block cond="!$_is_indexmodule">{@ $_body_class[] = $layout_info->sidebar_position}</block>
<block cond="$layout_info->layout_type === 'main'">
    {@ $_visual_class[] = 'main'}
<block cond="$layout_info->menu_type_main === 'startup'">
    {@ $_container_class[] = 'onepage'}
{@ $_onepage_header = true}
</block>
<block cond="$layout_info->menu_type_main === 'magazine'">
    {@ $_container_class[] = 'magazine'}
{@ $_enable_unb = true}
{@ $_magazine_header = true}
{@ $layout_info->menu_fixed = 'N'}
</block>
</block>
<block cond="$layout_info->layout_type === 'sub'">
    {@ $_enable_slide = false}
{@ $_visual_class[] = 'sub'}
<block cond="$layout_info->menu_type_sub === 'basic_regular' || $layout_info->menu_type_sub === 'magazine_regular'">
    {@ $_visual_class[] = 'sub_type2'}
</block>
<block cond="$layout_info->menu_type_sub === 'magazine_simple' || $layout_info->menu_type_sub === 'magazine_regular'">
    {@ $_container_class[] = 'magazine'}
{@ $_magazine_header = true}
{@ $_enable_unb = true}
{@ $layout_info->menu_fixed = 'N'}
</block>
<block cond="$layout_info->menu_type_sub === 'onepage_parallax'">
    {@ $_container_class[] = 'onepage'}
{@ $_onepage_header = true}
{@ $_visual_class[] = 'sub_type3'}
</block>
</block>

<!--// 메뉴 -->
<block cond="$layout_info->menu_fixed === 'Y'">
    {@ $_container_class[] = 'fixed_header'}
</block>




<!--// Demo 기능 활성화 -->
<!--// 사이트 인덱스에서만 데모기능 사용 -->
<block cond="!$_is_indexmodule">{@ $layout_info->use_demo = 'N'}</block>
<!--// 페이지 수정 모드에서 감춤 -->
<block cond="$act === 'dispPageAdminContentModify'">{@ $layout_info->use_demo = 'N'}</block>


{@ $_body_class = join(' ', $_body_class)}
{@ $_visual_class = join(' ', $_visual_class)}
{@ $_container_class = join(' ', $_container_class)}
<!--// END:레이아웃을 위한 설정 값들 -->


<!--// CSS -->
<load target="./css/layout.css" />
    <load target="./css/idangerous.swiper.css" />
    <load target="./css/welcome.css" />
    <load target="./css/webfont.css" />
    <load target="./css/xeicon.css" cond="$mid === 'xeicon'" />
    <load target="../../common/xeicon/xeicon.min.css" />
    <!--// JS -->
    <load cond="$_enable_slide" target="./js/idangerous.swiper.min.js" />
    <load target="./js/layout.js" />
    <load cond="$layout_info->use_demo ==='Y'" target="./js/welcome.js" />
    <load target="./js/jquery.parallax-scroll.min.js" />


    <!--// BODY -->
    <p class="skip"><a href="#content">{$lang->skip_to_content}</a></p>
    <div class="container {$_container_class}  {$menutype_class}">

    <!-- HEADER -->
    <div class="header_wrap xe-clearfix">
    <div cond="$layout_info->enable_intergration_search === 'Y'" class="search_wrap">
    <div class="search_area">
    <!-- SEARCH -->
    <form action="{getUrl()}" method="get" class="search" no-error-return-url="true">
    <input type="hidden" name="vid" value="{$vid}" />
    <input type="hidden" name="mid" value="{$mid}" />
    <input type="hidden" name="act" value="IS" />
    <input type="text" name="is_keyword" value="{$is_keyword}" required="required" title="{$lang->cmd_search}" placeholder="Search" />
    </form>
    <!-- /SEARCH -->
    <a href="#" class="btn_close" title="{$lang->cmd_xedition_search_close}" onclick="return false"><i class="xi-close"></i><span class="blind">{$lang->cmd_xedition_search_close}</span></a>
    </div>
    </div>

    <header class="header {$_visual_class}">
    <!--// LOGO -->
    <h1 class="logo-item">
    {@ $_logo_img = $layout_info->logo_img}
<block cond="$_magazine_header && $layout_info->logo_img_magazine">
    {@ $_logo_img = $layout_info->logo_img_magazine}
</block>
<a href="<!--@if($layout_info->logo_url)-->{$layout_info->logo_url}<!--@else-->{getUrl('')}<!--@end-->">
    <!--@if($_logo_img)-->
<!--@if($_magazine_header)-->
<img src="{$layout_info->logo_img_magazine}" alt="{$layout_info->logo_text}" />
    <!--@else-->
<block cond="$_onepage_header && $layout_info->logo_img_transparent">
    {@ $_logo_img = $layout_info->logo_img_transparent}
</block>
<img src="{$_logo_img}" data-logo="{$layout_info->logo_img}"|cond="$_onepage_header && $layout_info->logo_img_transparent" alt="{$layout_info->logo_text}" />
    <!--@endif-->
<!--@else-->
{@ $_logo_img = 'logo.png'}
<block cond="$_magazine_header">{@ $_logo_img = 'm_logo.png'}</block>
<block cond="$_onepage_header">{@ $_logo_img = 's_logo.png'}</block>
<img src="{$layout_info->path}img/{$_logo_img}" data-logo="{$layout_info->path}img/logo.png"|cond="$_onepage_header" alt="XEDITION" />
    <!--@end-->
</a>
</h1>
<!--// END:LOGO -->

<div class="side">
    <ul>
    <!-- search -->
    <li cond="$layout_info->enable_intergration_search === 'Y'" class="click">
    <a href="#" title="{$lang->cmd_search}"><i class="xi-magnifier"></i><span class="blind">{$lang->cmd_search}</span></a>
    </li>
    <!-- admin -->
    <li cond="$logged_info->is_admin == 'Y'">
    <a href="{getUrl('', 'module', 'admin')}" target="_blank" title="{$lang->cmd_management}"><i class="xi-cog"></i><span class="blind">{$lang->cmd_management}</span></a>
    </li>
    <!-- login -->
    <li class="hover">
    <!--@if($is_logged)-->
<!-- after_login -->
<a href="{getUrl('act', 'dispMemberInfo')}" class="login_after">
    <!--@if($logged_info->profile_image->src)-->
<img src="{$logged_info->profile_image->src}" alt="{$logged_info->nick_name}" />
    <!--@else-->
<img src="./img/ico_default.jpg" alt="{$logged_info->nick_name}" />
    <!--@end-->
</a>
<div class="ly ly_login">
    <ul>
    <li loop="$logged_info->menu_list => $key, $val"><a href="{getUrl('act', $key, 'member_srl', '', 'page', '')}">{Context::getLang($val)}</a></li>
    <li><a href="{getUrl('act', 'dispMemberLogout')}">{$lang->cmd_logout}</a></li>
    </ul>
    <span class="edge"></span>
    </div>
    <!-- /after_login -->
    <!--@else-->
<!-- before_login -->
<a href="{getUrl('act', 'dispMemberLoginForm')}" id="ly_btn"><i class="xi-user-add"></i><span class="blind">{$lang->cmd_login}/{$lang->cmd_signup}</span></a>
    <div class="ly ly_login">
    <ul>
    <li><a id="ly_login_btn" href="{getUrl('act', 'dispMemberLoginForm')}">{$lang->cmd_login}</a></li>
    <li><a href="{getUrl('act', 'dispMemberSignUpForm')}">{$lang->cmd_signup}</a></li>
    </ul>
    <span class="edge"></span>
    </div>
    <!-- /before_login -->
    <!--@end-->
</li>
</ul>
</div>

<!-- SNB -->
<div cond="$_enable_unb && $UNB->list" class="custom_area">
    <ul>
    <li loop="$UNB->list => $key, $val">
    <a href="{$val['href']}" target="_blank"|cond="$val['open_window'] == 'Y'">{$val['link']}</a>
    </li>
    </ul>
    </div>

    <!-- GNB -->
    <nav cond="$GNB->list" class="gnb" id="gnb">
    <div id="mobile_menu_btn" class="menu_btn">
    <div class="menu_bar">
    <div class="btn1"></div>
    <div class="btn2"></div>
    <div class="btn3"></div>
    </div>
    </div>
    <ul>
    <li loop="$GNB->list => $key1, $val1">
    <a href="{$val1['href']}" target="_blank"|cond="$val1['open_window'] == 'Y'">{$val1['link']}</a>
    <block cond="$val1['selected']">{@ $_selected_menu = $val1}</block>
<ul cond="$val1['list']" class="depth2">
    <li loop="$val1['list'] => $key2, $val2" class="more"|cond="$val2['list']">
    <a href="{$val2['href']}" target="_blank"|cond="$val2['open_window'] == 'Y'">{$val2['link']}</a>
    <ul cond="$val2['list']" class="depth3">
    <li loop="$val2['list'] => $key3, $val3">
    <a href="{$val3['href']}" target="_blank"|cond="$val3['open_window'] == 'Y'">{$val3['link']}</a>
    </li>
    </ul>
    </li>
    </ul>
    </li>
    </ul>
    </nav>
    <!-- /GNB -->
    </header>
    </div>
    <!-- END:HEADER -->

<!-- VISUAL-SUBHEADER -->
<div cond="$layout_info->layout_type === 'sub'" class="visual {$_visual_class}">
    {@ $_subheader_img = 'sub_banner_01.jpg'}
<block cond="$layout_info->menu_type_sub === 'onepage_parallax'">{@ $_subheader_img = 'sub_banner_02.jpg'}</block>
<block cond="$mid === 'xeicon'">{@ $_subheader_img = 'sub_banner_xeicon.jpg'}</block>
<span class="bg_img" style="background-image:url('{$layout_info->path}img/{$_subheader_img}')"></span>
    <span class="mask"></span>
    <div class="sub_title">
    <h1>{$sub_header_title}</h1>
    </div>
    </div>
    <!-- Swiper -->
    <div cond="$layout_info->layout_type === 'main' && $_enable_slide" class="visual swiper-container">
    <!-- 슬라이드 -->
    <div class="swiper-wrapper">
    <!--@if($_sample_slide)-->
<include target="./demo/slide.html" />
    <!--@else-->
<div cond="$layout_info->slide_img1" style="background-image:url('{$layout_info->slide_img1}');" class="swiper-slide">
    <div cond="$layout_info->slide_text1">
    <div>
    {$layout_info->slide_text1}
    </div>
    </div>
    </div>
    <div cond="$layout_info->slide_img2" style="background-image:url('{$layout_info->slide_img2}');" class="swiper-slide">
    <div cond="$layout_info->slide_text2">
    <div>
    {$layout_info->slide_text2}
    </div>
    </div>
    </div>
    <div cond="$layout_info->slide_img3" style="background-image:url('{$layout_info->slide_img3}');" class="swiper-slide">
    <div cond="$layout_info->slide_text3">
    <div>
    {$layout_info->slide_text3}
    </div>
    </div>
    </div>
    <div cond="$layout_info->slide_img4" style="background-image:url('{$layout_info->slide_img4}');" class="swiper-slide">
    <div cond="$layout_info->slide_text4">
    <div>
    {$layout_info->slide_text4}
    </div>
    </div>
    </div>
    <div cond="$layout_info->slide_img5" style="background-image:url('{$layout_info->slide_img5}');" class="swiper-slide">
    <div cond="$layout_info->slide_text5">
    <div>
    {$layout_info->slide_text5}
    </div>
    </div>
    </div>
    <!--@end-->
</div>
<!-- END:슬라이드 -->
<!-- Add Pagination -->
<div class="swiper-pagination"></div>
    <div class="swiper-button left"><button type="button" class="swiper-button-prev"><i class="xi-angle-left"></i></button></div>
    <div class="swiper-button right"><button type="button" class="swiper-button-next"><i class="xi-angle-right"></i></button></div>
    </div>
    <!-- /VISUAL -->

    <!-- BODY -->
    <div class="body {$_body_class}">
    <!-- LNB -->
    <nav cond="$_selected_menu['list'] && $layout_info->layout_type === 'sub' && $layout_info->sidebar_position !== 'none'" class="lnb">
    <ul>
    <li loop="$_selected_menu['list'] => $key1, $val1">
    <a href="{$val1['href']}" target="_blank"|cond="$val1['open_window'] == 'Y'">{$val1['link']}</a>
    <ul cond="$val1['list']">
    <li loop="$val1['list'] => $key2, $val2" class="on"|cond="$val2['selected']">
    <a href="{$val2['href']}" target="_blank"|cond="$val2['open_window'] == 'Y'">{$val2['link']}</a>
    </li>
    </ul>
    </li>
    </ul>
    </nav>
    <!-- /LNB -->
    <!-- CONTENT -->
    <div class="content" id="content">
    {$content}
    </div>
    <!--@if($layout_info->use_demo === 'Y')-->
<include target="./demo/welcome_main.html" />
    <!--@endif-->
<!-- /CONTENT -->
</div>
<!-- END:BODY -->

<footer class="footer" style="border-bottom-color:#CDA25A">
    <div class="f_info_area">
    <div class="f_info">
    <!--@if(!$_sample_footer)-->
<p class="f_logo<!--@if(!$layout_info->footer_logo_img)--> log_txt<!--@end-->">
    <a href="<!--@if($layout_info->footer_logo_url)-->{$layout_info->footer_logo_url}<!--@else-->#<!--@end-->">
    <!--@if($layout_info->footer_logo_img)-->
<img src="{$layout_info->footer_logo_img}" alt="{$layout_info->footer_logo_text}" />
    <!--@else-->
{$layout_info->footer_logo_text}
<!--@end-->
</a>
</p>
<p class="sub_desc">{$layout_info->footer_text}</p>
    <!--@else-->
<include target="./demo/footer.html" />
    <!--@end-->
</div>
<div class="f_info2">
    <div class="site_map">
    <ul cond="$FNB->list">
    {@$i = 0}
<li loop="$FNB->list => $key1, $val1" class="clear"|cond="!($i % 3) && $i > 0">
    {@$i++}
<a href="{$val1['href']}" target="_blank"|cond="$val1['open_window'] == 'Y'">{$val1['link']}</a>
    <ul cond="$val1['list']">
    <li loop="$val1['list'] => $key2, $val2">
    <a href="{$val2['href']}" target="_blank"|cond="$val2['open_window'] == 'Y'">{$val2['link']}</a>
    </li>
    </ul>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <div class="f_cr_area">
    <p class="copyright">
    <!--@if(!$_sample_footer)-->
{$layout_info->footer_copyright}
<!--@else-->
<include target="./demo/copyright.html" />
    <!--@end-->
</p>
<ul class="mobile-footer-member">
    <!--@if(!$is_logged)-->
<li><a href="{getUrl('act','dispMemberLoginForm')}">{$lang->cmd_login}</a></li>
    <li><a href="{getUrl('act','dispMemberSignUpForm')}">{$lang->cmd_signup}</a></li>
    <!--@else-->
<li><a href="{getUrl('act','dispMemberLogout')}">{$lang->cmd_logout}</a></li>
    <li><a href="{getUrl('act','dispMemberInfo')}">{$lang->cmd_view_member_info}</a></li>
    <!--@end-->
</ul>
</div>
</footer>
</div>

<!-- TOP -->
<a href="#" class="btn_top"><i class="xi-angle-up"><span class="blind">{$lang->cmd_move_up}</span></i></a>
    <!-- /TOP -->

    <!-- Login widget -->
<section cond="$layout_info->use_login_widget != 'N'" class="login_widget" style="display:none"|cond="$XE_VALIDATOR_ID != 'layouts/xedition/layout/1' || !$XE_VALIDATOR_MESSAGE">
    <load target="./css/widget.login.css" />
    <div class="ly_dimmed"></div>
    <div class="signin">
    <div class="login-header">
    <h1>LOGIN</h1>
    </div>
    <div class="login-body">
    <form action="{getUrl('', 'act', 'procMemberLogin')}" method="post" autocomplete="off">
    <input type="hidden" name="act" value="procMemberLogin" />
    <input type="hidden" name="success_return_url" value="{getCurrentPageUrl()}" />
    <input type="hidden" name="xe_validator_id" value="layouts/xedition/layout/1" />
    <fieldset>
    <legend class="blind">{$lang->cmd_login}</legend>
    <div class="control-group">
    <div class="group">
    <input type="text" name="user_id" id="uemail" required="true" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label class="info_label" for="uemail">{$lang->user_id}</label>
    </div>
    <div class="group">
    <input type="password" name="password" id="upw" required="true" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label class="info_label" for="upw">{$lang->password}</label>
    </div>
    </div>
    <div cond="$XE_VALIDATOR_ID == 'layouts/xedition/layout/1' && $XE_VALIDATOR_MESSAGE" class="control-group">
    <p class="error">{$XE_VALIDATOR_MESSAGE}</p>
    </div>
    <div class="control-group">
    <label class="chk_label" for="keepid_opt">
    <input type="checkbox" name="keep_signed" id="keepid_opt" value="Y" />
    <span class="checkbox"></span> {$lang->keep_signed}
    </label>
    <div id="warning">
    <p style="text-align:right;"><i class="xi-close"></i></p>
    <p>{str_replace('\n\n', '<br />', $lang->about_keep_signed)}</p>
<div class="edge"></div>
    </div>
    <button type="submit" class="btn_submit">{$lang->cmd_login}</button>
    </div>
    </fieldset>
    </form>
    </div>
    <div class="login-footer">
    <a href="{getUrl('act', 'dispMemberFindAccount')}">{$lang->cmd_find_member_account}</a>
    <span class="f_bar">|</span>
    <a href="{getUrl('act', 'dispMemberSignUpForm')}">{$lang->cmd_signup}</a>
    </div>
    <a href="#" class="btn_ly_popup"><span class="blind">닫기</span></a>
    </div>
    <script>
    jQuery(function ($) {
        var keep_msg = $("#warning");
        $(".chk_label").on("mouseenter mouseleave focusin focusout", function (e) {
            if(e.type == "mouseenter" || e.type == "focusin") {
                keep_msg.show();
            }
            else {
                keep_msg.hide();
            }
        });
        $("#ly_login_btn, #ly_btn").click(function () {
            $(".login_widget").show();
            return false;
        });
        $(".btn_ly_popup").click(function () {
            $(".login_widget").hide();
            return false;
        });
        $("input").blur(function () {
            var $this = $(this);
            if ($this.val()) {
                $this.addClass("used");
            }
            else {
                $this.removeClass("used");
            }
        });
    });
</script>
</section>
<!-- /Login widget -->
<script cond="$_enable_slide">
    jQuery(document).ready(function () {

        var swiper = new Swiper('.swiper-container', {
            autoplay: 6000,
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
        jQuery('.swiper-button-next').on('click', function(e){
            e.preventDefault();
            swiper.swipeNext();
        });
        jQuery('.swiper-button-prev').on('click', function(e){
            e.preventDefault();
            swiper.swipePrev();
        });
// gallery 20170117

        jQuery('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 194,
            itemMargin: 6,
            asNavFor: '#slider'
        });

        jQuery('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });

    });
</script>