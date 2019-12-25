<div dir="rtl">

# راهنمای معماری و ساختمان داده‌ها در وبسایت سافتویرتاکز

<table>
    <caption>شما میتوانید این مستند را به زبان‌های زیر مطالعه کنید</caption>
    <tbody>
        <tr>
            <td>English</td>
            <td>فارسی</td>
        </tr>
    </tbody>
</table>

## ساختار پوشه

<div dir="ltr">

```bash
├── episodes                             # All the data (e.g. YAML and image files)
│   │                                    # related to episodes should place in this directory.
│   │
│   ├── live                             # Categorize live episodes.
│   │   └── $LIVE_EPISODE_IDENTITY       # A directory as a unique identity for each live episode.
│   │       └── spec.yaml                # Information about the live episode.
│   └── meetup                           # Categorize meetup episodes.
│       └── season-1                     # Categorize meetup episodes based on season.
│           │                            # Each season category directory should follow
│           │                            # season-* pattern in which * is a unsigned integer.
│           └── $MEETUP_EPISODE_IDENTITY # A directory as a unique identity for each meetup episode.
│               └── spec.yaml            # Information about the meetup episode
└── guests                               # All the data (e.g. YAML and image files)
    │                                    # related to guests should place in this directory
    └── $GUEST_IDENTITY                  # A directory as a unique identity for each guest
        └── spec.yaml                    # Information about the guest
```

</div>

## فایل spec.yaml مهمان

<div dir="ltr">

```yaml
first_name: نام
last_name: نام خانوادگی
bio: بیوگرافی
avatar: ./avatar.jpeg
social_links:
  github: https://github.com/xxx
  twitter: https://twitter.com/xxx
  telegram: https://t.me/xxx
  youtube: https://youtube.com/xxx
```

</div>

- **`first_name`** - نام مهمان.
- **`last_name`** - نام خانوادگی مهمان.
- **`bio`** - بیوگرافی مهمان.
- **`avatar`** - مسیر relative از فایل spec.yaml به فایل تصویر آواتار مهمان.
- **`social_links`** - (**اختیاری**)
  - **`github`** - آدرس صفحه GitHub مهمان. (**اختیاری**)
  - **`twitter`** - آدرس صفحه Twitter مهمان. (**اختیاری**)
  - **`telegram`** - آدرس صفحه Telegram مهمان. (**اختیاری**)
  - **`youtube`** - آدرس صفحه Youtube مهمان. (**اختیاری**)

## فایل spec.yaml اپیزود

<div dir="ltr">

```yaml
title: عنوان
spoiler: |-
  توضیحی کوتاه درباره اپیزود
scheduled_at: 1398-10-04 10:30:00
cover: ./cover.jpeg
guests:
  - x
  - y
  - z
references:
  books:
    - name: نام کتاب
      author: نویسنده کتاب
      image: ./book.jpeg
      url: https://book.com
  videos:
    - title: عنوان ویدئو
      image: ./video.jpeg
      url: https://video.com
  podcasts:
    - name: نام پادکست
      image: ./podcast.jpeg
      url: https://podcast.com
  papers:
    - title: عنوان مقاله
      spoiler: |-
        توضیحی کوتاه درباره مقاله
      url: https://paper.com
```

</div>

- **`title`** - عنوان اپیزود.
- **`spoiler`** - توضیحی کوتاه درباره اپیزود.
- **`scheduled_at`** - تاریخ برگزاری اپیزود.
- **`cover`** - مسیر relative از فایل spec.yaml به فایل تصویر کاور اپیزود.
- **`guests`** - لیستی از <span dir="ltr">\$GUEST_IDENTITY</span>.
- **`references`** - منابع معرفی شده در اپیزود. (**اختیاری**)
  - **`books`** - کتاب‌های معرفی شده به عنوان منابع. (**اختیاری**)
    - **`name`** - نام کتاب.
    - **`author`** - نام نویسنده/نویسندگان کتاب.
    - **`image`** - مسیر relative از فایل spec.yaml به فایل تصویر کتاب.
    - **`url`** - لینک صفحه وب کتاب.
  - **`videos`** - ویدئو‌های معرفی شده به عنوان منابع. (**اختیاری**)
    - **`title`** - عنوان ویدئو.
    - **`image`** - مسیر relative از فایل spec.yaml به فایل تصویر ویدئو.
    - **`url`** - لینک ویدئو.
  - **`podcasts`** - پادکست‌های معرفی شده به عنوان منابع. (**اختیاری**)
    - **`name`** - نام پادکست.
    - **`image`** - مسیر relative از فایل spec.yaml به فایل تصویر پادکست.
    - **`url`** - لینک پادکست.
  - **`papers`** - مقالات معرفی شده به عنوان منابع. (**اختیاری**)
    - **`title`** - عنوان ویدئو.
    - **`spoiler`** - توضیحی کوتاه درباره مقاله.
    - **`url`** - لینک مقاله.

</div>
