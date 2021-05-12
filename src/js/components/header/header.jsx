import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

const Header = () => {
  return <Fragment>
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className="page-header__logo">
          <span className="visually-hidden">Логотип Avto-moto</span>
          <svg className="page-header__logo-icon" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1547 27.269L35.3713 26.719C34.3621 26.6375 33.6095 25.7537 33.691 24.7445C33.7295 24.2623 33.9578 23.815 34.3254 23.4997L39.4899 19.0694C37.6189 16.4074 34.9184 14.4411 31.8109 13.4778L29.1902 19.7662C28.8005 20.7012 27.7272 21.1421 26.7922 20.7525C26.3457 20.5664 25.991 20.2116 25.8058 19.7662L23.1915 13.4834C20.084 14.4468 17.3835 16.4131 15.5126 19.075L20.6771 23.5053C21.4461 24.1643 21.5351 25.3213 20.876 26.0903C20.5608 26.4579 20.1133 26.6852 19.6312 26.7246L12.8479 27.2746C12.8479 27.3525 12.8359 27.4277 12.8359 27.5056C12.8341 30.6818 13.8708 33.7719 15.7876 36.3056L21.591 32.7654C22.4555 32.2383 23.5838 32.5114 24.1109 33.3759C24.3631 33.7893 24.4409 34.2852 24.3291 34.7555L22.7543 41.3739C25.8297 42.4417 29.1756 42.4417 32.2509 41.3739L30.6761 34.7555C30.4414 33.771 31.0492 32.7819 32.0346 32.5472C32.5049 32.4354 33.0007 32.5133 33.4142 32.7654L39.2149 36.3001C41.1316 33.7664 42.1683 30.6763 42.1665 27.5001C42.1666 27.4221 42.1565 27.3469 42.1547 27.269ZM27.5 30.25C25.981 30.25 24.75 29.0189 24.75 27.5C24.75 25.981 25.981 24.75 27.5 24.75C29.0189 24.75 30.25 25.981 30.25 27.5C30.25 29.0189 29.0189 30.25 27.5 30.25Z" fill="#D12136"/>
            <path d="M27.5 0.916626C12.8186 0.916626 0.916626 12.8186 0.916626 27.5C0.916626 42.1813 12.8186 54.0834 27.5 54.0834C42.1813 54.0834 54.0834 42.1813 54.0834 27.5C54.0834 12.8186 42.1813 0.916626 27.5 0.916626ZM27.5 42.1666C19.3994 42.1666 12.8334 35.6006 12.8334 27.5C12.8334 19.3994 19.3994 12.8334 27.5 12.8334C35.6006 12.8334 42.1666 19.3994 42.1666 27.5C42.1666 35.6006 35.6006 42.1666 27.5 42.1666Z" fill="#2B2733"/>
            <path d="M44.8673 7.38269C54.462 18.4899 53.2374 35.2723 42.13 44.867C32.1512 53.4873 17.3617 53.4873 7.38281 44.867C16.973 55.9788 33.7553 57.2127 44.8671 47.6216C55.979 38.0306 57.2128 21.2491 47.6218 10.1373C46.7721 9.15279 45.8517 8.2325 44.8673 7.38269Z" fill="#1A1721"/>
            <path d="M19.2634 5.11546L21.0071 4.54895L20.1573 1.93332L18.4136 2.49983L19.2634 5.11546Z" fill="#555160"/>
            <path d="M34.8445 53.0626L36.5883 52.4961L35.7385 49.8805L33.9948 50.447L34.8445 53.0626Z" fill="#3B3944"/>
            <path d="M28.4167 0.916626H26.5834V3.66663H28.4167V0.916626Z" fill="#555160"/>
            <path d="M28.4167 51.3334H26.5834V54.0834H28.4167V51.3334Z" fill="#3B3944"/>
            <path d="M12.7497 8.75734L14.2327 7.67957L12.616 5.45518L11.1331 6.53295L12.7497 8.75734Z" fill="#555160"/>
            <path d="M42.3819 49.5443L43.8649 48.4666L42.2482 46.2422L40.7653 47.3199L42.3819 49.5443Z" fill="#3B3944"/>
            <path d="M7.67906 14.2333L8.75684 12.7504L6.53245 11.1337L5.45467 12.6166L7.67906 14.2333Z" fill="#555160"/>
            <path d="M48.4681 43.8666L49.5459 42.3837L47.3215 40.767L46.2437 42.2499L48.4681 43.8666Z" fill="#3B3944"/>
            <path d="M4.54848 21.0074L5.11499 19.2637L2.49936 18.4139L1.93285 20.1576L4.54848 21.0074Z" fill="#555160"/>
            <path d="M52.4999 36.5916L53.0664 34.8479L50.4508 33.9981L49.8843 35.7418L52.4999 36.5916Z" fill="#3B3944"/>
            <path d="M3.66663 26.5834H0.916626V28.4167H3.66663V26.5834Z" fill="#555160"/>
            <path d="M54.0834 26.5834H51.3334V28.4167H54.0834V26.5834Z" fill="#3B3944"/>
            <path d="M2.5046 36.5861L5.11975 35.7361L4.55309 33.9926L1.93794 34.8426L2.5046 36.5861Z" fill="#555160"/>
            <path d="M6.53001 43.865L8.75476 42.2485L7.67711 40.7653L5.45236 42.3818L6.53001 43.865Z" fill="#555160"/>
            <path d="M42.2492 8.75698L43.8656 6.53223L42.3824 5.45457L40.766 7.67932L42.2492 8.75698Z" fill="#555160"/>
            <path d="M35.7394 5.11576L36.5894 2.50061L34.8459 1.93395L33.9959 4.5491L35.7394 5.11576Z" fill="#555160"/>
            <path d="M53.0659 20.1575L52.4985 18.4159L50.7019 18.9998C50.8348 19.5994 50.9504 20.2044 51.042 20.8176L53.0659 20.1575Z" fill="#3B3944"/>
            <path d="M49.545 12.6161L48.4678 11.1329L47.8427 11.5913C48.1479 12.1257 48.4422 12.6684 48.7107 13.2266L49.545 12.6161Z" fill="#3B3944"/>
            <path d="M11.1329 48.4679L12.6161 49.545L13.2229 48.7108C12.6647 48.4423 12.1229 48.1481 11.5877 47.8428L11.1329 48.4679Z" fill="#3B3944"/>
            <path d="M18.4131 52.4985L20.1547 53.0659L20.8119 51.0419C20.1987 50.9503 19.5937 50.8347 18.9941 50.7018L18.4131 52.4985Z" fill="#3B3944"/>
            <path d="M50.4506 21.0072L51.0418 20.8147C50.9502 20.2015 50.8346 19.5965 50.7017 18.9969L49.8832 19.2628L50.4506 21.0072Z" fill="#555160"/>
            <path d="M47.321 14.233L48.7107 13.2246C48.4422 12.6664 48.148 12.1246 47.8427 11.5894L46.243 12.7517L47.321 14.233Z" fill="#555160"/>
            <path d="M12.75 46.243L11.5876 47.8427C12.1221 48.148 12.6648 48.4422 13.2229 48.7107L14.2313 47.321L12.75 46.243Z" fill="#555160"/>
            <path d="M19.2628 49.8832L18.9969 50.7017C19.5965 50.8346 20.2015 50.9502 20.8147 51.0418L21.0072 50.4506L19.2628 49.8832Z" fill="#555160"/>
            <path d="M27.5 8.25C16.8685 8.25 8.25 16.8685 8.25 27.5C8.25 38.1315 16.8685 46.75 27.5 46.75C38.1315 46.75 46.75 38.1315 46.75 27.5C46.75 16.8685 38.1315 8.25 27.5 8.25ZM27.5 42.1666C19.3994 42.1666 12.8334 35.6006 12.8334 27.5C12.8334 19.3994 19.3994 12.8334 27.5 12.8334C35.6006 12.8334 42.1666 19.3994 42.1666 27.5C42.1666 35.6006 35.6006 42.1666 27.5 42.1666Z" fill="#555160"/>
            <path d="M40.6313 13.4512C47.8941 21.1989 47.5017 33.3676 39.7541 40.6313C32.3575 47.5649 20.8488 47.5649 13.4521 40.6313C20.6938 48.4 32.8625 48.8272 40.6322 41.5855C48.402 34.3438 48.8282 22.1751 41.5865 14.4054C41.2794 14.0764 40.9603 13.7583 40.6313 13.4512Z" fill="#3B3944"/>
            <path d="M35.8417 15.4578C34.607 14.5962 33.2466 13.9297 31.8083 13.4833L31.3032 14.6942C32.8405 14.7748 34.3631 15.0306 35.8417 15.4578Z" fill="#9C1928"/>
            <path d="M24.0827 15.6309L23.1918 13.4832C20.0843 14.4466 17.3838 16.4129 15.5128 19.0748L16.5918 20.0007C18.7422 18.0171 21.2978 16.5265 24.0827 15.6309Z" fill="#9C1928"/>
            <path d="M27.5 7.33337C16.3625 7.33337 7.33337 16.3625 7.33337 27.5C7.33337 38.6375 16.3625 47.6666 27.5 47.6666C38.6375 47.6666 47.6666 38.6375 47.6666 27.5C47.6539 16.3671 38.6329 7.34616 27.5 7.33337ZM27.5 45.8334C17.3745 45.8334 9.16664 37.6255 9.16664 27.5C9.16664 17.3745 17.3745 9.16664 27.5 9.16664C37.6255 9.16664 45.8334 17.3745 45.8334 27.5C45.8214 37.62 37.62 45.8214 27.5 45.8334Z" fill="black"/>
            <path d="M27.5 11.9166C18.8935 11.9166 11.9166 18.8934 11.9166 27.5C11.9166 36.1066 18.8935 43.0834 27.5 43.0834C36.1065 43.0834 43.0834 36.1065 43.0834 27.5C43.0741 18.8971 36.1029 11.9259 27.5 11.9166ZM41.1877 26.2716L35.4466 25.8078C34.9425 25.7656 34.5676 25.3219 34.6097 24.8178C34.6299 24.5786 34.7426 24.3567 34.925 24.2L39.2874 20.4572C40.3535 22.2264 41.0025 24.2147 41.1877 26.2716ZM30.5608 14.1057L28.3461 19.4223C28.1508 19.8898 27.6145 20.1108 27.147 19.9155C26.9242 19.8229 26.7464 19.6451 26.6538 19.4223L24.4391 14.1057C26.4522 13.6317 28.5478 13.6317 30.5608 14.1057ZM15.7108 20.4554L20.075 24.2C20.459 24.529 20.504 25.1085 20.174 25.4925C20.0163 25.6759 19.7927 25.7904 19.5525 25.8097L13.8114 26.2736C13.9966 24.2147 14.6465 22.2256 15.7136 20.4555H15.7108V20.4554ZM17.1563 36.5328L22.0623 33.5399C22.494 33.2759 23.0587 33.4125 23.3227 33.8442C23.4492 34.0505 23.4887 34.2989 23.4317 34.5345L22.1008 40.1427C20.2042 39.3241 18.5157 38.0903 17.159 36.5329H17.1563V36.5328ZM23.8397 40.7412L25.2147 34.9589C25.5658 33.4812 24.6528 31.999 23.1751 31.647C22.4692 31.4792 21.7259 31.5966 21.1071 31.9752L16.0343 35.0717C14.6648 33.0001 13.8857 30.5947 13.7811 28.1133L19.701 27.6348C21.2144 27.5111 22.341 26.1828 22.2172 24.6694C22.1576 23.948 21.8166 23.2789 21.2666 22.8067L16.7566 18.9384C18.3067 16.9996 20.3509 15.5146 22.6737 14.6401L24.9581 20.1245C25.542 21.527 27.1516 22.1898 28.5541 21.6059C29.2242 21.3272 29.7568 20.7946 30.0355 20.1245L32.3208 14.6401C34.6436 15.5146 36.6878 16.9996 38.2379 18.9384L33.7334 22.8067C32.5812 23.7958 32.4482 25.532 33.4373 26.6842C33.9094 27.2342 34.5795 27.5762 35.3018 27.6348L41.2216 28.1133C41.1171 30.5947 40.338 33 38.9685 35.0717L33.8892 31.9743C32.5931 31.1833 30.9 31.593 30.109 32.8891C29.7313 33.5089 29.613 34.2522 29.7817 34.9589L31.1567 40.7412C28.7652 41.4196 26.2333 41.4196 23.8417 40.7412H23.8397ZM32.8964 40.1427L31.5627 34.5345C31.4454 34.0423 31.7497 33.5482 32.2419 33.4309C32.4775 33.3749 32.725 33.4143 32.9322 33.5399L37.8382 36.5328C36.4824 38.0902 34.7948 39.324 32.8991 40.1426H32.8964V40.1427Z" fill="black"/>
            <path d="M31.1666 27.5C31.1666 25.4751 29.5249 23.8334 27.5 23.8334C25.4751 23.8334 23.8334 25.4751 23.8334 27.5C23.8334 29.5249 25.4751 31.1666 27.5 31.1666C29.5249 31.1666 31.1666 29.5249 31.1666 27.5ZM27.5 29.3334C26.4871 29.3334 25.6666 28.513 25.6666 27.5C25.6666 26.4871 26.487 25.6666 27.5 25.6666C28.5129 25.6666 29.3334 26.487 29.3334 27.5C29.3334 28.5129 28.5129 29.3334 27.5 29.3334Z" fill="black"/>
            <path d="M27.5 55C12.3117 55 0 42.6883 0 27.5C0 12.3117 12.3117 0 27.5 0C42.6883 0 55 12.3117 55 27.5C54.9826 42.681 42.681 54.9826 27.5 55ZM27.5 1.83337C13.3247 1.83337 1.83337 13.3247 1.83337 27.5C1.83337 41.6753 13.3247 53.1666 27.5 53.1666C41.6753 53.1666 53.1666 41.6754 53.1666 27.5C53.1502 13.3311 41.6689 1.8498 27.5 1.83337Z" fill="black"/>
          </svg>
          <p className="page-header__text">
            <svg className="page-header__text-logo" width="55" height="15" viewBox="0 0 55 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4834 14L8.55176 10.9414H3.86719L2.93555 14H0L4.53516 1.09766H7.86621L12.4189 14H9.4834ZM7.90137 8.65625C7.04004 5.88477 6.55371 4.31738 6.44238 3.9541C6.33691 3.59082 6.26074 3.30371 6.21387 3.09277C6.02051 3.84277 5.4668 5.69727 4.55273 8.65625H7.90137ZM23.715 1.15039H26.466L22.0978 14H19.1271L14.7677 1.15039H17.5187L19.9357 8.79688C20.0705 9.24805 20.2082 9.77539 20.3488 10.3789C20.4953 10.9766 20.5861 11.3926 20.6213 11.627C20.6857 11.0879 20.9054 10.1445 21.2804 8.79688L23.715 1.15039ZM35.389 14H32.6644V3.41797H29.1751V1.15039H38.8782V3.41797H35.389V14ZM54.8589 7.55762C54.8589 9.68457 54.3315 11.3193 53.2768 12.4619C52.2221 13.6045 50.7104 14.1758 48.7417 14.1758C46.7729 14.1758 45.2612 13.6045 44.2065 12.4619C43.1518 11.3193 42.6245 9.67871 42.6245 7.54004C42.6245 5.40137 43.1518 3.76953 44.2065 2.64453C45.2671 1.51367 46.7846 0.948242 48.7593 0.948242C50.7339 0.948242 52.2427 1.5166 53.2856 2.65332C54.3345 3.79004 54.8589 5.4248 54.8589 7.55762ZM45.4809 7.55762C45.4809 8.99316 45.7534 10.0742 46.2983 10.8008C46.8432 11.5273 47.6577 11.8906 48.7417 11.8906C50.9155 11.8906 52.0024 10.4463 52.0024 7.55762C52.0024 4.66309 50.9214 3.21582 48.7593 3.21582C47.6753 3.21582 46.8579 3.58203 46.3071 4.31445C45.7563 5.04102 45.4809 6.12207 45.4809 7.55762Z" fill="#48494D"/>
            </svg>
            <svg className="page-header__text-logo" width="47" height="12" viewBox="0 0 47 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.63965 11L1.74121 2.65332H1.68652C1.764 3.8929 1.80273 5.05501 1.80273 6.13965V11H0.319336V1.00586H2.62305L5.39844 8.95605H5.43945L8.29688 1.00586H10.6074V11H9.03516V6.05762C9.03516 5.56087 9.04655 4.91374 9.06934 4.11621C9.09668 3.31868 9.11947 2.83561 9.1377 2.66699H9.08301L6.08203 11H4.63965ZM23.9323 5.98926C23.9323 7.61621 23.5244 8.88086 22.7087 9.7832C21.8975 10.6855 20.7468 11.1367 19.2565 11.1367C17.7481 11.1367 16.5882 10.6901 15.777 9.79688C14.9704 8.89909 14.5671 7.62533 14.5671 5.97559C14.5671 4.32585 14.9727 3.05892 15.7839 2.1748C16.5996 1.29069 17.7617 0.848633 19.2702 0.848633C20.7559 0.848633 21.9043 1.29753 22.7155 2.19531C23.5267 3.0931 23.9323 4.35775 23.9323 5.98926ZM16.3034 5.98926C16.3034 7.21973 16.5518 8.15397 17.0485 8.79199C17.5453 9.42546 18.2813 9.74219 19.2565 9.74219C20.2272 9.74219 20.9587 9.42773 21.4509 8.79883C21.9476 8.16992 22.196 7.2334 22.196 5.98926C22.196 4.76335 21.9499 3.83366 21.4577 3.2002C20.9701 2.56673 20.2409 2.25 19.2702 2.25C18.2904 2.25 17.5498 2.56673 17.0485 3.2002C16.5518 3.83366 16.3034 4.76335 16.3034 5.98926ZM31.3509 11H29.7171V2.40723H26.7777V1.00586H34.2904V2.40723H31.3509V11ZM46.5215 5.98926C46.5215 7.61621 46.1136 8.88086 45.2979 9.7832C44.4867 10.6855 43.336 11.1367 41.8457 11.1367C40.3373 11.1367 39.1774 10.6901 38.3662 9.79688C37.5596 8.89909 37.1563 7.62533 37.1563 5.97559C37.1563 4.32585 37.5619 3.05892 38.3731 2.1748C39.1888 1.29069 40.3509 0.848633 41.8594 0.848633C43.3451 0.848633 44.4935 1.29753 45.3047 2.19531C46.1159 3.0931 46.5215 4.35775 46.5215 5.98926ZM38.8926 5.98926C38.8926 7.21973 39.141 8.15397 39.6377 8.79199C40.1345 9.42546 40.8705 9.74219 41.8457 9.74219C42.8164 9.74219 43.5479 9.42773 44.0401 8.79883C44.5368 8.16992 44.7852 7.2334 44.7852 5.98926C44.7852 4.76335 44.5391 3.83366 44.0469 3.2002C43.5593 2.56673 42.8301 2.25 41.8594 2.25C40.8796 2.25 40.139 2.56673 39.6377 3.2002C39.141 3.83366 38.8926 4.76335 38.8926 5.98926Z" fill="#48494D"/>
            </svg>
          </p>
        </Link>
        <nav className="page-header__main-nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.CARS} className="main-nav__link">
                <span className="main-nav__text">Автомобили</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.CONTACTS} className="main-nav__link">
                <span className="main-nav__text">Контакты</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.SERVICES} className="main-nav__link">
                <span className="main-nav__text">Услуги</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.VACANCY} className="main-nav__link main-nav__link--active">
                <span className="main-nav__text">Вакансии</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </Fragment>;
};

export default Header;
