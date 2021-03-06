import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { ukrainian as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/uk';
import withContext from '../../../contexts/utils/withContext';
import { mainTranslations as russianMainTranslations } from './russian';

const secondaryColumnTranslations = {
  topStoriesTitle: 'Головне',
  featuresAnalysisTitle: 'Докладно',
};

const baseServiceConfig = {
  articleAuthor: `http://www.facebook.com/bbcnews`,
  articleTimestampPrefix: 'Оновлено: ',
  atiAnalyticsAppName: 'news-ukrainian',
  atiAnalyticsProducerId: '94',
  chartbeatDomain: 'ukrainian.bbc.co.uk',
  brandName: 'BBC News Україна',
  product: 'BBC News',
  serviceLocalizedName: 'Україна',
  defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/ukrainian.png',
  defaultImageAltText: 'BBC News Україна',
  dir: `ltr`,
  externalLinkText: ', зовнішнє посилання',
  imageCaptionOffscreenText: 'Підпис до фото, ',
  videoCaptionOffscreenText: 'Підпис до відео, ',
  audioCaptionOffscreenText: 'Підпис до аудіо',
  defaultCaptionOffscreenText: 'Підпис, ',
  imageCopyrightOffscreenText: 'Автор фото, ',
  service: 'ukrainian',
  serviceName: 'Ukrainian',
  themeColor: `${C_POSTBOX}`,
  twitterCreator: '@BBC_ua',
  twitterSite: '@BBC_ua',
  noBylinesPolicy:
    'https://www.bbc.com/ukrainian/institutional-50170368#authorexpertise',
  publishingPrinciples: 'https://www.bbc.com/ukrainian/institutional-50170368',
  isTrustProjectParticipant: true,
  script: cyrillicAndLatin,
  manifestPath: '/manifest.json',
  swPath: '/sw.js',
  frontPageTitle: 'Новини',
  theming: {
    brandBackgroundColour: `${C_POSTBOX}`,
    brandLogoColour: `${C_WHITE}`,
  },
  translations: {
    ads: {
      advertisementLabel: 'Реклама',
    },
    seeAll: 'Подивитись все',
    home: 'Головна',
    currentPage: 'Поточна сторінка',
    skipLinkText: 'Перейти до змісту',
    navMenuText: 'Розділи',
    mediaAssetPage: {
      mediaPlayer: 'Медіаплеєр',
      audioPlayer: 'Аудіоплеєр',
      videoPlayer: 'Відеоплеєр',
    },
    error: {
      404: {
        statusCode: '404',
        title: 'Сторінку не знайдено',
        message:
          'Вибачте, ми не знайшли сторінку, яку ви шукали. Спробуйте це:',
        solutions: [
          'Перевірте ще раз адресу посилання',
          'Натисніть на кнопку "оновити" в браузері',
          'Шукати сторінку в пошуковому вікні BBC',
        ],
        callToActionFirst: 'Спробуйте зайти на головну сторінку ',
        callToActionLinkText: 'BBC News Україна',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/ukrainian',
      },
      500: {
        statusCode: '500',
        title: 'Помилка серверу',
        message:
          'Вибачте, ми не змогли знайти сторінку, яку ви шукали. Спробуйте:',
        solutions: [
          'Натиснути кнопку "оновити" у вашому браузері',
          'Спробуйте пізніше',
        ],
        callToActionFirst: 'Спробуйте зайти на головну сторінку ',
        callToActionLinkText: 'Повернутися на головну',
        callToActionLast: '',
        callToActionLinkUrl: 'https://www.bbc.com/ukrainian',
      },
    },
    consentBanner: {
      privacy: {
        title:
          'Ми оновили наші правила використання особистих даних і файлів cookies',
        description: {
          uk: {
            first:
              'Ми змінили правила використання особистих даних і файлів cookies та хотіли б повідомити вам, що це означає для вас і ваших особистих даних.',
            linkText: null,
            last: null,
            linkUrl: null,
          },
          international: {
            first:
              'Ми змінили правила використання особистих даних і файлів cookies та хотіли б повідомити вам, що це означає для вас і ваших особистих даних.',
            linkText: null,
            last: null,
            linkUrl: null,
          },
        },
        accept: 'ОК',
        reject: 'Подивитися, що змінилося',
        rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
      },
      cookie: {
        title: 'Повідомити, що ви погоджуєтесь з використанням файлів cookies',
        description: {
          uk: {
            first: 'Ми використовуємо ',
            linkText: 'cookies',
            last:
              ', щоб вам було зручно користуватися сайтом. Повідомте нам, що ви погоджуєтесь з використанням цих файлів cookies.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
          international: {
            first:
              'Ми разом з нашими партнерами використовуємо технології, такі як ',
            linkText: 'cookies',
            last:
              ', а також збираємо дані, щоб вам було зручно користуватися сайтом і щоб контент і реклама, яку ви бачите, відповідали вашим запитам. Будь ласка, повідомте, чи ви згодні.',
            linkUrl:
              'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
          },
        },
        accept: 'Так, згоден',
        reject: 'Ні, мені потрібно переглянути налаштування',
        rejectUrl:
          'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
      },
    },
    media: {
      noJs: 'Ваш пристрій не підтримує відтворення мультимедійних файлів',
      contentExpired: 'Контент більше не доступний',
      contentNotYetAvailable: 'Ця програма ще не доступна.',
      audio: 'Аудіо',
      photogallery: 'Фотогалерея',
      video: 'Відео',
      bbc_ukrainian_tv: {
        title: 'Випуск новин',
        subtitle:
          'BBC News Україна розповідає про головні події дня на Громадському і на сайті bbc.ua',
      },
      listen: 'Прослухати',
      watch: 'Дивитися',
      liveLabel: 'LIVE',
      nextLabel: 'NEXT',
      previousRadioShow: 'Попередня радіопрограма',
      nextRadioShow: 'Наступна радіопрограма',
      duration: 'Тривалість',
      recentEpisodes: 'Більше',
    },
    socialEmbed: {
      caption: {
        textPrefixVisuallyHidden: 'Підпис до відео, ',
        text: 'Увага: інші сайти можуть містити рекламу',
      },
      fallback: {
        text: 'Контент недоступний',
        linkText: 'Дивіться більше у %provider_name%',
        linkTextSuffixVisuallyHidden: ', зовнішнє посилання',
        warningText: 'BBC не несе відповідальності за контент інших сайтів.',
      },
      skipLink: {
        text: 'Пропустити %provider_name% допис',
        endTextVisuallyHidden: 'Кінець %provider_name% допису',
      },
    },
    include: {
      errorMessage:
        'Вибачте, ми не можемо відобразити цю частину сторінки у мобільній версії.',
      linkText:
        'Перегляньте повну версію сторінки, щоб побачити увесь контент.',
    },
    relatedContent: 'Статті на цю ж тему',
    ...secondaryColumnTranslations,
  },
  brandSVG,
  mostRead: {
    header: 'Найпопулярніше',
    lastUpdated: 'Останнє оновлення:',
    numberOfItems: 10,
    hasMostRead: true,
    onIdxPage: false,
  },
  mostWatched: {
    header: 'Найпопулярніше',
    numberOfItems: 5,
    hasMostWatched: false,
  },
  radioSchedule: {
    hasRadioSchedule: false,
    onIdxPage: false,
  },
  recommendations: {
    hasStoryRecommendations: false,
  },
  footer: {
    trustProjectLink: {
      href: 'https://www.bbc.com/ukrainian/institutional-50170368',
      text: 'Чому BBC заслуговує на довіру',
    },
    externalLink: {
      href: 'https://www.bbc.co.uk/help/web/links/',
      text: 'Ознайомтеся з нашими правилами зовнішніх посилань.',
    },
    links: [
      {
        href: 'https://www.bbc.com/ukrainian/institutional-38144387',
        text: 'Правила користування',
      },
      {
        href: 'https://www.bbc.com/ukrainian/institutional-38144827',
        text: 'Особисті дані',
      },
      {
        href: 'https://www.bbc.com/usingthebbc/cookies/',
        text: 'Cookies',
      },
      {
        href: 'https://www.bbc.co.uk/send/u50853885',
        text: "Зв'язатися з BBC",
      },
      {
        href:
          'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        text: 'AdChoices / Do Not Sell My Info',
        lang: 'en-GB',
      },
    ],
    copyrightText: 'BBC. BBC не несе відповідальності за контент інших сайтів.',
  },
  fonts: [],
  timezone: 'GMT',
  navigation: [
    {
      title: 'Новини',
      url: '/ukrainian',
    },
    {
      title: 'Коронавірус',
      url: '/ukrainian/52118881',
    },
    {
      title: 'Наука',
      url: '/ukrainian/topics/cyx5kzy4w5yt',
    },
    {
      title: 'Технології',
      url: '/ukrainian/topics/cxnykv9q4kpt',
    },
    {
      title: 'Здоров’я',
      url: '/ukrainian/topics/cwr9jqqqq13t',
    },
    {
      title: 'Журнал',
      url: '/ukrainian/53725237',
    },
    {
      title: 'Книга року BBC',
      url: '/ukrainian/features-50320117',
    },
    {
      title: 'РУС',
      url: '/ukrainian/ukraine_in_russian',
    },
  ],
};

export const service = {
  default: {
    ...baseServiceConfig,
    datetimeLocale: 'uk',
    locale: 'uk_UA',
    languageName: 'Ukrainian',
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'uk',
    lang: 'uk',
  },
  'ru-UA': {
    ...baseServiceConfig,
    languageName: 'Russian',
    translations: {
      ...baseServiceConfig.translations,
      ...russianMainTranslations,
      ...secondaryColumnTranslations,
    },
    datetimeLocale: 'ru',
    serviceDatetimeLocale: 'uk',
    locale: 'ru_UA',
    // valid ISO 639-1 code - this is not the same as lang! see explanation in #3405
    isoLang: 'ru',
    lang: 'ru-UA',
    serviceLang: 'uk',
  },
};

export default withContext(service);
