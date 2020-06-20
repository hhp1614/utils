(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    359: function (t, s, a) {
      'use strict';
      a.r(s);
      var n = a(42),
        e = Object(n.a)(
          {},
          function () {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('h1', { attrs: { id: 'time-时间' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#time-时间' } }, [t._v('#')]),
                t._v(' time 时间')
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '引入' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#引入' } }, [t._v('#')]),
                t._v(' 引入')
              ]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('注：'), a('code', [t._v('fn')]), t._v(' 为需要使用的方法名')])]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('as')]),
                    t._v(' time '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/time'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// or')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' time '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'@hhp1614/utils/lib/common'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 使用')]),
                    t._v('\ntype'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fn')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n\n\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' fn '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/time'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 单独引入方法')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v("// import { fn } from '@hhp1614/utils/lib/common/time/fn';")
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('fn')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: 'timeformat-时间格式化' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#timeformat-时间格式化' } }, [t._v('#')]),
                t._v(' timeFormat 时间格式化')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-text extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  a('code', [t._v("timeFormat([time = new Date()], [format = 'YYYY-MM-DD hh:mm:ss']);\n")])
                ])
              ]),
              a('ul', [
                a('li', [
                  t._v('参数：\n'),
                  a('ul', [
                    a('li', [
                      a('code', [t._v('time')]),
                      t._v('：时间对象、时间戳、可转换为时间对象字符串，默认：'),
                      a('code', [t._v('new Date()')])
                    ]),
                    t._v(' '),
                    a('li', [
                      a('code', [t._v('format')]),
                      t._v('：格式，默认：'),
                      a('code', [t._v('YYYY-MM-DD hh:mm:ss')])
                    ])
                  ])
                ]),
                t._v(' '),
                a('li', [
                  t._v('格式说明：\n'),
                  a('ul', [
                    a('li', [a('code', [t._v('YY')]), t._v('：两位数的年份')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('YYYY')]), t._v('：四位数的年份')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('M')]), t._v('：月份，从 1 开始')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('MM')]), t._v('：月份，两位数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('D')]), t._v('：月份里的一天')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('DD')]), t._v('：月份里的一天，两位数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('h')]), t._v('：小时')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('hh')]), t._v('：小时，两位数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('m')]), t._v('：分钟')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('mm')]), t._v('：分钟，两位数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('s')]), t._v('：秒')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('ss')]), t._v('：秒，两位数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('S')]), t._v('：毫秒')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('SS')]), t._v('：毫秒，三位数')])
                  ])
                ]),
                t._v(' '),
                a('li', [t._v('例子：')])
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' timeFormat '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/time'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\nconsole'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('timeFormat')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'2020-01-01 01:01:01.001'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'YYYY年MM月DD日 hh时mm分ss秒 SS毫秒'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v("// '2020年01月01日 01时01分01秒 001毫秒'")
                    ]),
                    t._v('\n')
                  ])
                ])
              ])
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = e.exports;
    }
  }
]);