import React from 'react'
import cc from 'classcat'

import { Section, EpisodeTypeSign } from '~/components'

const classNames = {
  block: 'c-episode-types',
  elements: {
    item: 'c-episode-types__item',
    description: 'c-episode-types__description',
  },
}

export function component() {
  const descriptionClassName = cc([
    'o-text',
    '-weight-light',
    classNames.elements.description,
  ])

  return (
    <Section.component terminal>
      <div className={classNames.block}>
        <div className={classNames.elements.item}>
          <EpisodeTypeSign.meetup />
          <p className={descriptionClassName}>
            این‌جا جای توضیحاتی درباره برنامه دورهمی آنلاین است. با مخاطرات شغلی
            و مشکلاتی که ممکن است. سه‌شنبه ۱۳ شهریور ۹۷ با حمید پورجم، اسد صفری
            و ریحانه خزانه درباره برنامه صحبت می‌کنیم.
          </p>
        </div>
        <div className={classNames.elements.item}>
          <EpisodeTypeSign.live />
          <p className={descriptionClassName}>
            تولید نرم‌افزار و روش‌ها و چالش‌ها صحبت می‌کنیم. توضیحات مربوط به
            برنامه‌ی دیگر با نام نکات در ده دقیقه. سه‌شنبه ۱۳ شهریور ۹۷ با حمید
            پورجم، اسد صفری و ریحانه خزانه درباره برنامه‌ریزی
          </p>
        </div>
        <div className={classNames.elements.item}>
          <EpisodeTypeSign.live />
          <p className={descriptionClassName}>
            این هم جای دیگری برای توضیحاتی درباره برنامه برنامه‌نویسی زنده است.
            برای برنامه‌نویسان پیش بیاید آشنا می‌شویم. تولید نرم‌افزار و روش‌ها
            و برنامه‌نویسان چالش‌ها صحبت می‌کنیم.
          </p>
        </div>
      </div>
    </Section.component>
  )
}
