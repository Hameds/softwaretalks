<div dir="rtl">

# رهنمای مشارکت در وبسایت سافتویرتاکز

<table>
    <caption>شما میتوانید این مستند را به زبان‌های زیر مطالعه کنید</caption>
    <tbody>
        <tr>
            <td><a href="CONTRIBUTING.en.md">English</a></td>
            <td>فارسی</td>
        </tr>
    </tbody>
</table>

این باعث افتخار و خوشنودی ما است که شما تصمیم به مشارکت در این پروژه گرفته‌اید.
هر سطحی از مشارکت اعم یک غلط املایی ساده تا اجرای یکی صحفه مجزا برای ما بسیار ارزشمند است.

## آئین‌نامه رفتاری چیست؟

دقت کنید که تمامی تعاملات در این پروژه باید با
[آئین نامه رفتاری](CODE_OF_CONDUCT.md)
ارائه شده مطابقت داشته باشند.
این آئین نامه بدین معناست که شما مسئول هستید با اشخاص در این پروژه بدون در نظر گرفتن هویت آنها با احترام برخورد کنید.
همچنین اگر شما در این پروژه مورد تعارض قرار بگیرید, همانطور که در آئین نامه رفتاری عنوان شده, ما تمامی تلاشمان را خواهیم کرد تا فرد مخاطی را توبیخ کنیم.

## ما به دنبال چه نوع مشارکت‌هایی هستیم؟

### توسعه وبسایت

جهت مشارکت در توسعه وبسایت شما می‌توانید در هر یک از نقش‌های ذیل که علاقه‌مند هستید کمک کنید (حداقل دانش لازم برای هر نقش در روبروی آن ذکر شده است):

<div dir="ltr">

- **Front-end Web Developer**: HTML, CSS, Sass, [BEM](https://zellwk.com/blog/css-architecture-1/) and [Namespace](https://zellwk.com/blog/css-architecture-2/) Naming Conventions
- **TypeScript and React Developer**: TypeScript and React
- **JavaScript DevOps**: Webpack, Gatsby, GitHub Pages
  <!-- TODO: Minimal knowledge should be asked from the designer -->
- **Graphic Designer**

</div>

<!-- ### تولید محتوا -->

<!-- ### شرکت در رویدادهای سافتویرتاکز -->

## ساختار پروژه

ساختار پروژه مشابه ساختار
[معرفی شده](https://www.gatsbyjs.org/docs/gatsby-project-structure/)
از طرف
[Gatsby](https://www.gatsbyjs.org/)
است.

<div dir="ltr">

```bash
├── .cache                          # Internal cache of Gatsby
├── graphics                        # Graphic design sources
├── public                          # Gatsby build directory
├── src
│   ├── assets
│   │   └── fonts
│   │   └── images
│   ├── components
│   │   ├── index.ts                # Public API for components module
│   ├── pages                       # Gatsby pages
│   ├── templates                   # Gatsby templates
│   ├── sass                        # Sass codebase
│   │   ├── base
│   │   │   ├── _module.scss        # Public API for base module
│   │   ├── components
│   │   │   ├── _module.scss        # Public API for components module
│   │   └── main.scss
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.en.md
├── CONTRIBUTING.fa.md
├── CONTRIBUTING.md -> README.en.md # Default contribution guideline
├── LICENSE
├── README.en.md
├── README.fa.md
├── README.md -> README.en.md       # Default README
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── gatsby-utils.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

</div>

## چطور مشارکت کنم؟

تا به حال در پروژه اوپن سورس مشارکت نداشته‌اید؟

1. #### پیدا کردن issue مورد علاقه‌تان

   در صفحه
   [Issues](https://github.com/softwaretalks/softwaretalks/issues?q=is%3Aopen+is%3Aissue+label%3Anext)
   فهرست تغییراتی که باید اعمال شوند لیست شده‌اند. با مراجعه با این صفحه می‌توانید issue مورد علاقه خود را پیدا کنید.

   اگر علاقه‌مند به کار کردن بر روی یک issue هستید ولی به نظرتان توضیحات issue کافی نیست, می‌توانید با عنوان این موضوع در همان issue به صورت یک comment ما را در جریان قرار دهید تا اطلاعات کافی را فراهم کنیم.

2. #### یک فورک از مخزن تهیه کنید

3. #### مخزن را کلون کنید

   با دستور زیر در terminal می‌توانید مخزن را بر روی کامپیوتر خود کلون کنید (فراموش نکنید که باید جای `YOUR_USERNAME` در دستور, نام‌کاربری گیت‌هاب خود را قرار دهید):

<div dir="ltr">

```bash
git clone https://github.com/YOUR_USERNAME/softwaretalks.git
```

</div>

4. #### یک برنچ جدید برای خود از برنچ next ایجاد کنید

<div dir="ltr">

```bash
git checkout -b your-feature-branch next
```

</div>

5. #### نصب وابستگی‌ها

   با استفاده از Yarn یا NPM وابستگی‌ها را نصب کنید.

<div dir="ltr">

```bash
# Yarn
yarn install

# NPM
npm install
```

</div>

6. #### تغییرات لازم را اعمال کرده سپس commit و push کنید ([کمک؟](#کمک))

7. #### یک PR جدید در مخزن [softwaretalks/softwaretalks](https://github.com/softwaretalks/softwaretalks) با عنوان و توضیحات مربوط به تغییرات باز کنید.

8. #### منتظر بمانید که PR شما تحت code review اعضای پروژه قرار گیرد

## اعضای پروژه

- محمد حسنی ([ایمیل](mailto:thebrodmann@gmail.com) | [توییتر](https://twitter.com/thebrodmann) | [گیت‌هاب](https://github.com/thebrodmann))

  - Front-end Web Developer
  - TypeScript and React Developer
  - JavaScript DevOps

## کمک!

اگر نیازی به کمک داشتید, از طریق
[کانال #website](https://oursoftwaretalks.slack.com/messages/CN1DC7UES)
در
[Slack](https://oursoftwaretalks.slack.com/)
و یا ارسال ایمیل به
[اعضای پروژه](#اعضای-پروژه)
می‌توانید سوالاتتان را با ما به اشتراک بگذارید.

## مجوز

سورس وبسایت
[softwaretalks.ir](https://softwaretalks.ir)
تحت مجوز
[GPL-3.0](LICENSE)
منتشر شده است.

</div>
