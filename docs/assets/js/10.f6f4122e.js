(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    356: function (t, s, a) {
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
              a('h1', { attrs: { id: 'collection-集合' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#collection-集合' } }, [t._v('#')]),
                t._v(' collection 集合')
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
                    t._v(' collection '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/collection'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// or')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' collection '),
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
                      t._v("'@hhp1614/utils/lib/common/collection'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 单独引入方法')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v("// import { fn } from '@hhp1614/utils/lib/common/collection/fn';")
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
              a('h2', { attrs: { id: 'each-遍历' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#each-遍历' } }, [t._v('#')]),
                t._v(' each 遍历')
              ]),
              t._v(' '),
              a('p', [t._v('遍历数组，类数组，字符串，对象')]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('对象的 '), a('code', [t._v('length')]), t._v(' 属性也会被遍历')])]),
              t._v(' '),
              a('div', { staticClass: 'language-text extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  a('code', [t._v('each(collection, callback);\n')])
                ])
              ]),
              a('ul', [
                a('li', [
                  t._v('参数：\n'),
                  a('ul', [
                    a('li', [a('code', [t._v('collection')]), t._v('：需要遍历的数组、类数组和对象')]),
                    t._v(' '),
                    a('li', [
                      a('code', [t._v('callback')]),
                      t._v('：回调函数，有两个参数：'),
                      a('code', [t._v('(value, index|key)')])
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
                    t._v(' each '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'@hhp1614/utils/lib/common/collection'")
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('each')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'a'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'b'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'c'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                      t._v('value'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                      t._v(' index')
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n  console'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('log')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('index'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' value'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('/* 输出\n0 "a"\n1 "b"\n2 "c"\n*/')
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
