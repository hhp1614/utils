(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    357: function (t, s, a) {
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
              a('h1', { attrs: { id: 'func-方法' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#func-方法' } }, [t._v('#')]),
                t._v(' func 方法')
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
                    t._v(' func '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/func'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// or')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' func '),
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
                      t._v("'@hhp1614/utils/lib/common/func'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 单独引入方法')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v("// import { fn } from '@hhp1614/utils/lib/common/func/fn';")
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
              a('h2', { attrs: { id: 'debounce-函数防抖' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#debounce-函数防抖' } }, [t._v('#')]),
                t._v(' debounce 函数防抖')
              ]),
              t._v(' '),
              a('p', [t._v('限制事件的频繁触发')]),
              t._v(' '),
              a('p', [
                t._v('将需要延迟执行的函数('),
                a('code', [t._v('func')]),
                t._v(')在函数('),
                a('code', [t._v('debounce')]),
                t._v(')最后一次调用时的 '),
                a('code', [t._v('wait')]),
                t._v(' 毫秒后执行')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-text extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  a('code', [t._v('debounce(func, wait, [immediate = false]);\n')])
                ])
              ]),
              a('ul', [
                a('li', [
                  t._v('参数：\n'),
                  a('ul', [
                    a('li', [a('code', [t._v('func')]), t._v('：需要防抖处理的函数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('wait')]), t._v('：延迟执行的时间，单位毫秒')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('immediate')]), t._v('：是否立即执行，默认 '), a('code', [t._v('false')])])
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
                    t._v(' debounce '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/func'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                    t._v(' counter '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('add')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' counter'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' debouncedAdd '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('debounce')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('add'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('32')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('debouncedAdd')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('debouncedAdd')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\nconsole'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1')]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: 'throttle-函数节流' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#throttle-函数节流' } }, [t._v('#')]),
                t._v(' throttle 函数节流')
              ]),
              t._v(' '),
              a('p', [
                t._v('创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 '),
                a('code', [t._v('wait')]),
                t._v(' 毫秒调用一次该函数')
              ]),
              t._v(' '),
              a('p', [t._v('对于想控制一些触发频率较高的事件有帮助')]),
              t._v(' '),
              a('p', [
                t._v('默认情况下，'),
                a('code', [t._v('throttle')]),
                t._v(' 将在调用的第一时间尽快执行这个 '),
                a('code', [t._v('func')]),
                t._v('（第一次和最后一次都执行 '),
                a('code', [t._v('func')]),
                t._v('）')
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-text extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  a('code', [t._v('throttle(func, wait, [options = {}]);\n')])
                ])
              ]),
              a('ul', [
                a('li', [
                  t._v('参数：\n'),
                  a('ul', [
                    a('li', [a('code', [t._v('func')]), t._v('：需要节流处理的函数')]),
                    t._v(' '),
                    a('li', [a('code', [t._v('wait')]), t._v('：延迟执行的时间，单位毫秒')]),
                    t._v(' '),
                    a('li', [
                      a('code', [t._v('options')]),
                      t._v('：选项，默认 '),
                      a('code', [t._v('{}')]),
                      t._v(' '),
                      a('ul', [
                        a('li', [
                          a('code', [t._v('leading')]),
                          t._v('：如果想禁用第一次首先执行的话，传递 '),
                          a('code', [t._v('{ leading: false }')])
                        ]),
                        t._v(' '),
                        a('li', [
                          a('code', [t._v('trailing')]),
                          t._v('：如果想禁用最后一次执行的话，传递 '),
                          a('code', [t._v('{ trailing: false }')])
                        ])
                      ])
                    ])
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
                    t._v(' throttle '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/func'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('let')]),
                    t._v(' counter '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function-variable function' } }, [t._v('add')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' counter'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('++')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' throttledAdd '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('throttle')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('add'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('32')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('throttledAdd')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('throttledAdd')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\nconsole'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('counter'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 1')]),
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
