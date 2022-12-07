import * as React from 'react';
import {container, text, contentBox, illustation} from  './section.module.css'

const Section = () => {
    return (
        <section className={container}>
            <div className={text}>
                <h2>Light, Fast & Powerful</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    <br />
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <div className={contentBox}>
                    <div>
                        <svg  width="36" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.9083 22.2396C35.6795 22.1487 35.4183 22.2056 35.2483 22.3835L32.6857 25.0769V9.07898H32.6887L35.1337 6.43916C35.3587 6.19611 35.3438 5.81629 35.1005 5.59136L35.0999 5.59081L34.2199 4.77184L35.4427 3.45193C35.6674 3.2086 35.6523 2.82905 35.4089 2.6044L32.7689 0.15957C32.5258 -0.0653583 32.1463 -0.0508025 31.9213 0.192527L27.6553 4.79848H6.88568C6.88376 3.14241 5.54178 1.80053 3.88559 1.79861H3.28574C1.62955 1.80053 0.287567 3.14241 0.285645 4.79848V30.5966C0.285645 30.9278 0.55426 31.1964 0.885773 31.1964H9.96844L8.70831 32.7094C8.49655 32.9642 8.53116 33.3424 8.78577 33.5542L11.5524 35.8575C11.807 36.0696 12.1855 36.035 12.3975 35.7804L12.3978 35.7801L15.4688 32.0909C15.6808 31.8355 15.8173 31.5254 15.8623 31.1964H26.8566L23.2506 34.9828C23.0224 35.2229 23.032 35.6027 23.2721 35.8309C23.3836 35.9369 23.5316 35.9962 23.6857 35.996H35.6855C36.017 35.996 36.2856 35.7274 36.2856 35.3962V22.7971C36.2856 22.5516 36.1362 22.3308 35.9083 22.2396ZM33.8454 6.05832L32.6855 7.31286V6.43045L33.4054 5.65048L33.8454 6.05832ZM31.4856 5.96V5.95149H31.4928L32.5241 4.8381L30.7619 3.20785L24.6491 9.81344L26.4113 11.4437L31.4856 5.96ZM25.2588 12.011L23.8787 12.4136L24.1734 11.0061L25.2588 12.011ZM34.154 3.07595L32.3926 1.44653L31.5771 2.32729L33.3388 3.95836L34.154 3.07595ZM3.28613 2.99851H3.88599C4.88025 2.99851 5.6861 3.8043 5.6861 4.79849V27.6124C5.16974 27.2153 4.5372 26.9988 3.88599 26.9966H3.28613C2.63464 26.9988 2.00238 27.2153 1.48602 27.6124V4.79849C1.48602 3.8043 2.29187 2.99851 3.28613 2.99851ZM3.88599 28.1966H3.28613C2.29187 28.1966 1.48602 29.0027 1.48602 29.9966H5.6861C5.6861 29.0027 4.88025 28.1966 3.88599 28.1966ZM14.5467 31.3235L14.1628 31.7843L12.3184 30.2491L12.7018 29.7877C12.9139 29.5331 13.2921 29.4985 13.5467 29.7105C13.547 29.7105 13.547 29.7108 13.5472 29.7108L14.4693 30.4765C14.7242 30.6883 14.759 31.0664 14.5473 31.3213L14.5467 31.3218V31.3235ZM10.0151 33.0162L11.8597 34.5514L13.3951 32.7066L11.5508 31.1711L10.0151 33.0162ZM15.6104 29.9966C15.5107 29.8304 15.3846 29.6818 15.2371 29.5563L14.3151 28.789C13.551 28.1529 12.4161 28.2564 11.78 29.0205L10.9659 29.9966H6.88586V5.99843H26.5453L23.3612 9.43909C23.3156 9.49045 23.2794 9.54977 23.2544 9.61376C23.2473 9.63106 23.2418 9.64726 23.2357 9.66539C23.2335 9.67226 23.2308 9.67917 23.2281 9.68616C23.2237 9.69735 23.2192 9.70876 23.2165 9.72059L22.5002 13.1451C22.4326 13.4694 22.6408 13.7872 22.9652 13.8547C23.0616 13.8748 23.1613 13.8709 23.2555 13.8435L26.6157 12.8644C26.624 12.8617 26.6317 12.8579 26.6393 12.8541C26.6459 12.8508 26.6524 12.8476 26.6593 12.8451C26.6744 12.8397 26.6901 12.832 26.7063 12.824C26.7736 12.7935 26.8346 12.7504 26.8862 12.6974L31.4859 7.72672V26.3367L27.9999 29.9966H15.6104ZM25.0854 34.796H35.0857V24.2968L25.0854 34.796ZM29.0862 33.5962C28.8434 33.5962 28.6245 33.4501 28.5316 33.226C28.4388 33.0019 28.4902 32.7437 28.6618 32.572L32.8619 28.3726C32.9742 28.26 33.1269 28.1968 33.286 28.1968C33.6172 28.1968 33.8861 28.4651 33.8861 28.7966V32.9964C33.8861 33.3276 33.6175 33.5962 33.286 33.5962H29.0862ZM32.6859 32.3962V30.2447L30.5342 32.3962H32.6859ZM22.4857 22.7971H26.6855C27.017 22.7971 27.2856 23.0656 27.2856 23.3969C27.2856 23.7283 27.017 23.9969 26.6858 23.9969H9.88577C9.55426 23.9969 9.28564 23.7283 9.28564 23.3969C9.28564 23.0656 9.55426 22.7971 9.88577 22.7971H14.0856V16.1975C14.0861 16.0385 14.149 15.8858 14.2608 15.7726L17.8607 12.173C18.095 11.9387 18.4749 11.9387 18.7092 12.173L22.3091 15.7726C22.4214 15.8855 22.4849 16.0382 22.4857 16.1975V22.7971ZM20.4377 15.5974L18.2861 13.4459L16.1344 15.5974H20.4377ZM15.2856 16.7974H21.2858V22.7971H15.2856V16.7974ZM17.6854 9.59816H18.8856V10.7981H17.6854V9.59816ZM18.8856 25.1969H17.6854V26.3968H18.8856V25.1969Z" fill="black"/>
                        </svg>

                        <h4>Title Goes Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div>
                        <svg  width="36" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.9083 22.2396C35.6795 22.1487 35.4183 22.2056 35.2483 22.3835L32.6857 25.0769V9.07898H32.6887L35.1337 6.43916C35.3587 6.19611 35.3438 5.81629 35.1005 5.59136L35.0999 5.59081L34.2199 4.77184L35.4427 3.45193C35.6674 3.2086 35.6523 2.82905 35.4089 2.6044L32.7689 0.15957C32.5258 -0.0653583 32.1463 -0.0508025 31.9213 0.192527L27.6553 4.79848H6.88568C6.88376 3.14241 5.54178 1.80053 3.88559 1.79861H3.28574C1.62955 1.80053 0.287567 3.14241 0.285645 4.79848V30.5966C0.285645 30.9278 0.55426 31.1964 0.885773 31.1964H9.96844L8.70831 32.7094C8.49655 32.9642 8.53116 33.3424 8.78577 33.5542L11.5524 35.8575C11.807 36.0696 12.1855 36.035 12.3975 35.7804L12.3978 35.7801L15.4688 32.0909C15.6808 31.8355 15.8173 31.5254 15.8623 31.1964H26.8566L23.2506 34.9828C23.0224 35.2229 23.032 35.6027 23.2721 35.8309C23.3836 35.9369 23.5316 35.9962 23.6857 35.996H35.6855C36.017 35.996 36.2856 35.7274 36.2856 35.3962V22.7971C36.2856 22.5516 36.1362 22.3308 35.9083 22.2396ZM33.8454 6.05832L32.6855 7.31286V6.43045L33.4054 5.65048L33.8454 6.05832ZM31.4856 5.96V5.95149H31.4928L32.5241 4.8381L30.7619 3.20785L24.6491 9.81344L26.4113 11.4437L31.4856 5.96ZM25.2588 12.011L23.8787 12.4136L24.1734 11.0061L25.2588 12.011ZM34.154 3.07595L32.3926 1.44653L31.5771 2.32729L33.3388 3.95836L34.154 3.07595ZM3.28613 2.99851H3.88599C4.88025 2.99851 5.6861 3.8043 5.6861 4.79849V27.6124C5.16974 27.2153 4.5372 26.9988 3.88599 26.9966H3.28613C2.63464 26.9988 2.00238 27.2153 1.48602 27.6124V4.79849C1.48602 3.8043 2.29187 2.99851 3.28613 2.99851ZM3.88599 28.1966H3.28613C2.29187 28.1966 1.48602 29.0027 1.48602 29.9966H5.6861C5.6861 29.0027 4.88025 28.1966 3.88599 28.1966ZM14.5467 31.3235L14.1628 31.7843L12.3184 30.2491L12.7018 29.7877C12.9139 29.5331 13.2921 29.4985 13.5467 29.7105C13.547 29.7105 13.547 29.7108 13.5472 29.7108L14.4693 30.4765C14.7242 30.6883 14.759 31.0664 14.5473 31.3213L14.5467 31.3218V31.3235ZM10.0151 33.0162L11.8597 34.5514L13.3951 32.7066L11.5508 31.1711L10.0151 33.0162ZM15.6104 29.9966C15.5107 29.8304 15.3846 29.6818 15.2371 29.5563L14.3151 28.789C13.551 28.1529 12.4161 28.2564 11.78 29.0205L10.9659 29.9966H6.88586V5.99843H26.5453L23.3612 9.43909C23.3156 9.49045 23.2794 9.54977 23.2544 9.61376C23.2473 9.63106 23.2418 9.64726 23.2357 9.66539C23.2335 9.67226 23.2308 9.67917 23.2281 9.68616C23.2237 9.69735 23.2192 9.70876 23.2165 9.72059L22.5002 13.1451C22.4326 13.4694 22.6408 13.7872 22.9652 13.8547C23.0616 13.8748 23.1613 13.8709 23.2555 13.8435L26.6157 12.8644C26.624 12.8617 26.6317 12.8579 26.6393 12.8541C26.6459 12.8508 26.6524 12.8476 26.6593 12.8451C26.6744 12.8397 26.6901 12.832 26.7063 12.824C26.7736 12.7935 26.8346 12.7504 26.8862 12.6974L31.4859 7.72672V26.3367L27.9999 29.9966H15.6104ZM25.0854 34.796H35.0857V24.2968L25.0854 34.796ZM29.0862 33.5962C28.8434 33.5962 28.6245 33.4501 28.5316 33.226C28.4388 33.0019 28.4902 32.7437 28.6618 32.572L32.8619 28.3726C32.9742 28.26 33.1269 28.1968 33.286 28.1968C33.6172 28.1968 33.8861 28.4651 33.8861 28.7966V32.9964C33.8861 33.3276 33.6175 33.5962 33.286 33.5962H29.0862ZM32.6859 32.3962V30.2447L30.5342 32.3962H32.6859ZM22.4857 22.7971H26.6855C27.017 22.7971 27.2856 23.0656 27.2856 23.3969C27.2856 23.7283 27.017 23.9969 26.6858 23.9969H9.88577C9.55426 23.9969 9.28564 23.7283 9.28564 23.3969C9.28564 23.0656 9.55426 22.7971 9.88577 22.7971H14.0856V16.1975C14.0861 16.0385 14.149 15.8858 14.2608 15.7726L17.8607 12.173C18.095 11.9387 18.4749 11.9387 18.7092 12.173L22.3091 15.7726C22.4214 15.8855 22.4849 16.0382 22.4857 16.1975V22.7971ZM20.4377 15.5974L18.2861 13.4459L16.1344 15.5974H20.4377ZM15.2856 16.7974H21.2858V22.7971H15.2856V16.7974ZM17.6854 9.59816H18.8856V10.7981H17.6854V9.59816ZM18.8856 25.1969H17.6854V26.3968H18.8856V25.1969Z" fill="black"/>
                        </svg>
                        <h4>Title Goes Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </div>
            <svg className={illustation} width="541" height="525" viewBox="0 0 541 525" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.473 397.963L167.286 331.841L73.6444 271.963L25.2856 348.436L102.739 397.963H125.473Z" fill="#F0F0F0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M80.2856 416.963H183.286V396.963H80.2856V416.963ZM181.948 415.673H81.6233V398.253H181.948V415.673Z" fill="#3F3D56"/>
                <path d="M171.786 413.963C175.375 413.963 178.286 411.053 178.286 407.463C178.286 403.873 175.375 400.963 171.786 400.963C168.196 400.963 165.286 403.873 165.286 407.463C165.286 411.053 168.196 413.963 171.786 413.963Z" fill="#222F65"/>
                <path d="M151.786 413.963C155.375 413.963 158.286 411.053 158.286 407.463C158.286 403.873 155.375 400.963 151.786 400.963C148.196 400.963 145.286 403.873 145.286 407.463C145.286 411.053 148.196 413.963 151.786 413.963Z" fill="#222F65"/>
                <path d="M133.786 413.963C137.375 413.963 140.286 411.053 140.286 407.463C140.286 403.873 137.375 400.963 133.786 400.963C130.196 400.963 127.286 403.873 127.286 407.463C127.286 411.053 130.196 413.963 133.786 413.963Z" fill="#222F65"/>
                <path d="M114.786 413.963C118.375 413.963 121.286 411.053 121.286 407.463C121.286 403.873 118.375 400.963 114.786 400.963C111.196 400.963 108.286 403.873 108.286 407.463C108.286 411.053 111.196 413.963 114.786 413.963Z" fill="#222F65"/>
                <path d="M95.7856 413.963C99.3755 413.963 102.286 411.053 102.286 407.463C102.286 403.873 99.3755 400.963 95.7856 400.963C92.1958 400.963 89.2856 403.873 89.2856 407.463C89.2856 411.053 92.1958 413.963 95.7856 413.963Z" fill="#222F65"/>
                <path d="M307.748 185.904V134.829H333.286V109.963H208.286V234.963H315.14V222.741C315.14 218.14 316.968 213.728 320.222 210.474C323.475 207.221 327.888 205.393 332.489 205.393H333.286V185.904H307.748Z" fill="#F0F0F0"/>
                <rect x="47.9352" y="10.5684" width="41" height="41" transform="rotate(-14 47.9352 10.5684)" fill="#F0F0F0"/>
                <rect x="362.286" y="432.963" width="84" height="17" fill="#222F65"/>
                <rect x="340.286" y="346.963" width="123" height="16" fill="#F0F0F0"/>
                <rect x="0.285645" y="523.963" width="524" height="1" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M331.321 524.963H484.25C494.206 524.952 502.274 516.887 502.286 506.936V222.989C502.274 213.038 494.206 204.974 484.25 204.963H331.321C321.365 204.974 313.297 213.038 313.286 222.989V506.936C313.297 516.887 321.365 524.952 331.321 524.963ZM314.631 222.989C314.641 213.781 322.108 206.318 331.321 206.307H484.25C493.464 206.318 500.93 213.781 500.94 222.989V506.936C500.93 516.145 493.464 523.608 484.25 523.618H331.321C322.108 523.608 314.641 516.145 314.631 506.936V222.989Z" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M386.286 214.963C386.286 217.172 388.077 218.963 390.286 218.963C392.494 218.961 394.283 217.171 394.286 214.963C394.286 212.754 392.495 210.963 390.286 210.963C388.077 210.963 386.286 212.754 386.286 214.963ZM387.619 214.963C387.619 213.49 388.813 212.296 390.286 212.296C391.758 212.298 392.951 213.491 392.952 214.963C392.952 216.436 391.758 217.63 390.286 217.63C388.813 217.63 387.619 216.436 387.619 214.963Z" fill="#3F3D56"/>
                <rect x="400.286" y="213.963" width="30" height="1" fill="#3F3D56"/>
                <path d="M491.286 223.963V277.963C461.463 277.962 437.287 253.786 437.286 223.963H491.286Z" fill="#222F65"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M325.286 506.963H491.286V223.963H325.286V506.963ZM489.942 505.619H326.63V225.307H489.942V505.619Z" fill="#3F3D56"/>
                <path opacity="0.1" d="M451.786 274.963C462.003 274.963 470.286 266.68 470.286 256.463C470.286 246.246 462.003 237.963 451.786 237.963C441.568 237.963 433.286 246.246 433.286 256.463C433.286 266.68 441.568 274.963 451.786 274.963Z" fill="black"/>
                <path d="M448.786 276.963C459.003 276.963 467.286 268.68 467.286 258.463C467.286 248.246 459.003 239.963 448.786 239.963C438.568 239.963 430.286 248.246 430.286 258.463C430.286 268.68 438.568 276.963 448.786 276.963Z" fill="#222F65"/>
                <rect x="332.286" y="234.963" width="26" height="9" fill="#3F3D56"/>
                <rect x="346.286" y="324.963" width="26" height="9" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M347.286 359.963H471.286V342.963H347.286V359.963ZM469.938 358.655H348.633V344.271H469.938V358.655Z" fill="#3F3D56"/>
                <rect x="340.286" y="397.963" width="123" height="16" fill="#F0F0F0"/>
                <rect x="346.286" y="374.963" width="26" height="9" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M347.286 410.963H471.286V393.963H347.286V410.963ZM469.938 409.655H348.633V395.271H469.938V409.655Z" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M366.286 445.963H451.286V427.963H366.286V445.963ZM449.936 444.677H367.635V429.249H449.936V444.677Z" fill="#3F3D56"/>
                <path d="M466.286 353.463C466.285 356.204 464.565 358.651 461.986 359.579C459.407 360.507 456.523 359.716 454.776 357.603L454.77 357.597C453.069 355.533 452.806 352.639 454.106 350.302C455.406 347.965 458.004 346.664 460.654 347.022C463.304 347.38 465.464 349.324 466.097 351.922C466.097 351.924 466.098 351.926 466.099 351.927C466.1 351.928 466.102 351.929 466.104 351.929C466.224 352.431 466.285 352.946 466.286 353.463Z" fill="#222F65"/>
                <path opacity="0.1" d="M466.286 353.088C466.285 355.988 464.521 358.575 461.875 359.557C459.229 360.538 456.27 359.702 454.479 357.467L454.472 357.46C454.349 356.929 454.287 356.384 454.286 355.838C454.286 352.938 456.05 350.35 458.696 349.369C461.342 348.388 464.301 349.224 466.092 351.459C466.092 351.461 466.093 351.462 466.094 351.464C466.095 351.465 466.097 351.466 466.099 351.466C466.222 351.997 466.285 352.542 466.286 353.088Z" fill="black"/>
                <path d="M462.786 362.963C466.375 362.963 469.286 360.053 469.286 356.463C469.286 352.873 466.375 349.963 462.786 349.963C459.196 349.963 456.286 352.873 456.286 356.463C456.286 360.053 459.196 362.963 462.786 362.963Z" fill="#222F65"/>
                <path d="M466.286 403.463C466.285 406.204 464.565 408.651 461.986 409.579C459.407 410.507 456.523 409.716 454.776 407.603L454.77 407.597C453.069 405.533 452.806 402.639 454.106 400.302C455.406 397.965 458.004 396.664 460.654 397.022C463.304 397.38 465.464 399.324 466.097 401.922C466.097 401.924 466.098 401.926 466.099 401.927C466.1 401.928 466.102 401.929 466.104 401.929C466.224 402.431 466.285 402.946 466.286 403.463Z" fill="#222F65"/>
                <path opacity="0.1" d="M466.286 404.088C466.285 406.988 464.521 409.575 461.875 410.557C459.229 411.538 456.27 410.702 454.479 408.467L454.472 408.46C454.349 407.929 454.287 407.384 454.286 406.838C454.286 403.938 456.05 401.35 458.696 400.369C461.342 399.388 464.301 400.224 466.092 402.459C466.092 402.461 466.093 402.462 466.094 402.464C466.095 402.465 466.097 402.466 466.099 402.466C466.222 402.997 466.285 403.542 466.286 404.088Z" fill="black"/>
                <path d="M462.786 413.963C466.375 413.963 469.286 411.053 469.286 407.463C469.286 403.873 466.375 400.963 462.786 400.963C459.196 400.963 456.286 403.873 456.286 407.463C456.286 411.053 459.196 413.963 462.786 413.963Z" fill="#222F65"/>
                <rect x="315.286" y="141.963" width="35" height="35" fill="#F0F0F0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M443.286 158.963C443.286 163.381 446.867 166.963 451.286 166.963C455.702 166.958 459.281 163.379 459.286 158.963C459.286 154.545 455.704 150.963 451.286 150.963C446.867 150.963 443.286 154.545 443.286 158.963ZM444.619 158.963C444.619 155.281 447.604 152.296 451.286 152.296C454.966 152.3 457.948 155.283 457.952 158.963C457.952 162.645 454.968 165.63 451.286 165.63C447.604 165.63 444.619 162.645 444.619 158.963Z" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M257.286 279.963H274.286V262.963H257.286V279.963ZM272.978 278.655H258.593V264.271H272.978V278.655Z" fill="#3F3D56"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M523.286 410.963H540.286V393.963H523.286V410.963ZM538.978 409.655H524.593V395.271H538.978V409.655Z" fill="#3F3D56"/>
                <path d="M195.286 293.867L198.283 295.493L208.484 301.029L224.951 309.963L234.548 292.034C236.373 288.631 236.779 284.638 235.677 280.933C234.575 277.229 232.055 274.118 228.673 272.286C221.33 268.293 212.266 269.532 206.245 275.35L206.24 275.356C204.796 276.752 203.578 278.367 202.629 280.142L195.286 293.867Z" fill="#2F2E41"/>
                <path d="M240.286 474.043L238.355 496.923L231.113 497.963L226.286 471.963L240.286 474.043Z" fill="#FFB8B8"/>
                <path d="M228.638 498.581C228.638 498.581 238.213 493.449 240.229 497.555C240.229 497.555 238.717 509.871 244.765 511.411C250.812 512.95 253.332 523.727 244.765 524.753C236.197 525.78 230.653 522.701 227.63 522.701C224.606 522.701 227.63 511.924 227.63 511.924L228.638 498.581Z" fill="#2F2E41"/>
                <path d="M179.286 474.043L181.217 496.923L188.458 497.963L193.286 471.963L179.286 474.043Z" fill="#FFB8B8"/>
                <path d="M191.934 498.581C191.934 498.581 182.358 493.449 180.342 497.555C180.342 497.555 181.854 509.871 175.807 511.411C169.759 512.95 167.239 523.727 175.807 524.753C184.374 525.78 189.918 522.701 192.942 522.701C195.966 522.701 192.942 511.924 192.942 511.924L191.934 498.581Z" fill="#2F2E41"/>
                <path d="M219.786 297.963C227.241 297.963 233.286 291.919 233.286 284.463C233.286 277.007 227.241 270.963 219.786 270.963C212.33 270.963 206.286 277.007 206.286 284.463C206.286 291.919 212.33 297.963 219.786 297.963Z" fill="#FFB8B8"/>
                <path d="M179.286 309.763L189.78 326.457L202.274 325.445L222.763 326.963C222.763 326.963 224.697 323.047 226.276 319.238C227.141 317.336 227.806 315.347 228.26 313.304C228.76 309.763 221.763 306.222 221.763 306.222C221.763 306.222 221.489 306.171 221.029 306.06C220.419 305.913 219.48 305.67 218.45 305.316C216.126 304.517 213.333 303.161 212.768 301.163C211.769 297.622 219.265 292.563 219.265 292.563L210.269 283.963C210.269 283.963 202.279 295.199 192.574 297.758C192.011 297.909 191.44 298.027 190.865 298.112C190.835 298.117 190.81 298.123 190.78 298.128C180.285 299.645 179.286 309.763 179.286 309.763Z" fill="#FFB8B8"/>
                <path d="M184.55 305.963L178.762 310.501C178.762 310.501 174.027 332.184 175.605 338.235C177.184 344.286 175.079 349.833 175.079 350.841C175.079 351.85 170.343 389.668 170.343 389.668C170.343 389.668 160.872 409.838 170.87 407.821C180.867 405.804 177.184 385.634 177.184 385.634L189.286 350.337V320.586L184.55 305.963Z" fill="#FFB8B8"/>
                <path d="M224.331 309.963L228.423 312.963L230.468 354.958L245.811 390.955C245.811 390.955 257.062 408.453 249.902 408.953C242.742 409.453 238.139 390.955 238.139 390.955L224.331 356.458L222.286 322.962L224.331 309.963Z" fill="#FFB8B8"/>
                <path d="M199.02 311.963C199.02 311.963 209.107 319.041 225.246 316.513C225.246 316.513 229.785 325.613 227.263 330.668C224.741 335.724 230.289 347.857 231.298 349.373C232.307 350.89 243.907 382.234 247.941 416.105C251.976 449.977 263.072 473.232 253.489 476.265C243.907 479.298 224.237 482.837 222.22 479.804C220.202 476.771 217.176 401.444 217.176 401.444L211.629 430.261C211.629 430.261 219.194 479.298 213.646 480.31C208.098 481.321 173.298 478.287 174.307 472.221C175.316 466.154 185.403 434.305 185.403 434.305C185.403 434.305 184.898 370.606 194.985 358.473C194.985 358.473 199.02 351.901 193.472 343.307C187.924 334.712 188.429 321.063 188.429 321.063C188.429 321.063 192.464 321.063 199.02 311.963Z" fill="#2F2E41"/>
                <path d="M190.286 298.315L198.366 316.963L200.286 315.956L191.927 297.963L190.286 298.315Z" fill="#2F2E41"/>
                <path d="M218.286 305.963L224.738 319.963L226.286 319.827L225.759 317.444L220.922 306.704C220.298 306.557 219.338 306.316 218.286 305.963Z" fill="#2F2E41"/>
                <path d="M197.662 294.986C198.652 298.252 201.452 300.591 204.77 300.923C208.087 301.254 211.275 299.513 212.86 296.504C206.494 287.964 211.954 282.599 222.295 278.541C223.888 275.507 223.537 271.786 221.405 269.123C215.632 268.365 209.834 270.324 205.628 274.452L205.623 274.457L198.276 288.439C197.219 290.447 196.998 292.808 197.662 294.986Z" fill="#2F2E41"/>
                <path d="M212.786 288.963C213.614 288.963 214.286 287.62 214.286 285.963C214.286 284.306 213.614 282.963 212.786 282.963C211.957 282.963 211.286 284.306 211.286 285.963C211.286 287.62 211.957 288.963 212.786 288.963Z" fill="#FFB8B8"/>
                <path d="M218.286 281.084L233.497 287.963L236.286 281.822C235.805 279.577 234.799 277.478 233.351 275.695L222.881 270.963L218.286 281.084Z" fill="#2F2E41"/>
                <path d="M254.786 415.963C258.375 415.963 261.286 413.053 261.286 409.463C261.286 405.873 258.375 402.963 254.786 402.963C251.196 402.963 248.286 405.873 248.286 409.463C248.286 413.053 251.196 415.963 254.786 415.963Z" fill="#222F65"/>
                <path d="M38.7856 455.963C41.2709 455.963 43.2856 453.948 43.2856 451.463C43.2856 448.978 41.2709 446.963 38.7856 446.963C36.3004 446.963 34.2856 448.978 34.2856 451.463C34.2856 453.948 36.3004 455.963 38.7856 455.963Z" fill="#FF6584"/>
                <rect x="59.2856" y="474.963" width="1" height="50" fill="#3F3D56"/>
                <path d="M60.2856 480.963C64.1516 480.963 67.2856 477.829 67.2856 473.963C67.2856 470.097 64.1516 466.963 60.2856 466.963C56.4197 466.963 53.2856 470.097 53.2856 473.963C53.2856 477.829 56.4197 480.963 60.2856 480.963Z" fill="#3F3D56"/>
                <path d="M59.2856 504.963C59.2856 504.963 58.3089 483.69 38.2856 486.163L59.2856 504.963Z" fill="#3F3D56"/>
            </svg>

        </section>
    )
}

export default Section;