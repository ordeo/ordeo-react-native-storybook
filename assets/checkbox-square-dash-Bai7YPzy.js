import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,o,r as s,t as c}from"./module-Dr4boW0v.js";import{a as l,i as u}from"./inputs-B4MjoMvH.js";import{n as d,t as f}from"./Pressable-B2SEHg1P.js";import{i as p,n as m,r as h,t as g}from"./interaction-state-Cs7nJWgF.js";import{i as _,n as v,r as y,t as b}from"./use-interaction-state-BFJfQFwk.js";import{b as x,f as S,i as C,o as w,p as T,s as E,y as D}from"./iframe-D-AQh-w-.js";var O,k,A;function j(){return(j=e((()=>{p(),m(),y(),b(),S(),d(),C(),O=n(),k=h(`CheckboxState`,g),A=l(function({as:e=f,invalid:t,size:n,selected:r,readonly:i,disabled:a,square:o,linkedState:s,style:c,...l}){let u=w(),d=T(a),{currentState:p,propsWithHandlers:m}=v({...l,disabled:d}),h=s??p,g=E(u.component.checkbox.base,{size:n,readonly:i,disabled:a},h);return(0,O.jsx)(e,{...m,style:[_,{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`},g,c],children:(0,O.jsx)(k,{value:h,children:o({invalid:t,size:n,selected:r,readonly:i,disabled:a})})})}),A.__docgenInfo={description:`Turns an option on or off. Label it with a form field.`,methods:[],displayName:`Checkbox`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var M,N,P;function F(){return(F=e((()=>{M=t(),x(),C(),j(),N=n(),P=l(function({as:e=D,invalid:t,size:n,selected:r,readonly:i,disabled:a,icon:o,style:s,...c}){let l=w(),u=(0,M.use)(k),d=E(l.component.checkbox.square.base,{invalid:t,size:n,selected:r,readonly:i,disabled:a},u);return(0,N.jsx)(e,{...c,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`},d,s],children:o?.({size:n,readonly:i,disabled:a})})}),P.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquare`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
  var hrefAttrs = props.hrefAttrs,
    onLayout = props.onLayout,
    onMoveShouldSetResponder = props.onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
    onResponderEnd = props.onResponderEnd,
    onResponderGrant = props.onResponderGrant,
    onResponderMove = props.onResponderMove,
    onResponderReject = props.onResponderReject,
    onResponderRelease = props.onResponderRelease,
    onResponderStart = props.onResponderStart,
    onResponderTerminate = props.onResponderTerminate,
    onResponderTerminationRequest = props.onResponderTerminationRequest,
    onScrollShouldSetResponder = props.onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder = props.onStartShouldSetResponder,
    onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  if (process.env.NODE_ENV !== 'production') {
    React.Children.toArray(props.children).forEach(item => {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }
  var hasTextAncestor = React.useContext(TextAncestorContext);
  var hostRef = React.useRef(null);
  var _useLocaleContext = useLocaleContext(),
    contextDirection = _useLocaleContext.direction;
  useElementLayout(hostRef, onLayout);
  useResponderEvents(hostRef, {
    onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture,
    onResponderEnd,
    onResponderGrant,
    onResponderMove,
    onResponderReject,
    onResponderRelease,
    onResponderStart,
    onResponderTerminate,
    onResponderTerminationRequest,
    onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder,
    onStartShouldSetResponderCapture
  });
  var component = 'div';
  var langDirection = props.lang != null ? getLocaleDirection(props.lang) : null;
  var componentDirection = props.dir || langDirection;
  var writingDirection = componentDirection || contextDirection;
  var supportedProps = pickProps(rest);
  supportedProps.dir = componentDirection;
  supportedProps.style = [styles.view$raw, hasTextAncestor && styles.inline, props.style];
  if (props.href != null) {
    component = 'a';
    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
        rel = hrefAttrs.rel,
        target = hrefAttrs.target;
      if (download != null) {
        supportedProps.download = download;
      }
      if (rel != null) {
        supportedProps.rel = rel;
      }
      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }
  var platformMethodsRef = usePlatformMethods(supportedProps);
  var setRef = useMergeRefs(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return createElement(component, supportedProps, {
    writingDirection
  });
})`,computed:!0},required:!1}}}})))()}function I(e){return(0,L.jsx)(s,{viewBox:`0 0 12 12`,fill:`none`,...e,children:(0,L.jsx)(a,{d:`M9.64645 2.64648C9.84171 2.45122 10.1582 2.45122 10.3535 2.64648C10.5487 2.84175 10.5487 3.15825 10.3535 3.35352L4.85348 8.85352C4.65822 9.04878 4.34171 9.04878 4.14645 8.85352L1.64645 6.35352C1.45118 6.15825 1.45118 5.84175 1.64645 5.64648C1.84171 5.45122 2.15822 5.45122 2.35348 5.64648L4.49996 7.79297L9.64645 2.64648Z`,fill:`currentColor`})})}var L;function R(){return(R=e((()=>{c(),L=n(),I.__docgenInfo={description:``,methods:[],displayName:`Check`}})))()}var z,B,V;function H(){return(H=e((()=>{o(),z=t(),R(),C(),j(),B=n(),V=l(function({size:e,readonly:t,disabled:n,style:i,...a}){let o=w(),s=(0,z.use)(k),c=E(o.component.checkbox.square.check.base,{size:e,readonly:t,disabled:n},s);return(0,B.jsx)(I,{...r(c),...a,style:i})}),V.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquareCheck`}})))()}function U(e){return(0,W.jsx)(s,{viewBox:`0 0 16 2`,fill:`none`,...e,children:(0,W.jsx)(a,{d:`M15 0C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H15Z`,fill:`currentColor`})})}var W;function G(){return(G=e((()=>{c(),W=n(),U.__docgenInfo={description:``,methods:[],displayName:`Minus`}})))()}var K,q,J;function Y(){return(Y=e((()=>{o(),K=t(),G(),C(),j(),q=n(),J=l(function({size:e,readonly:t,disabled:n,style:i,...a}){let o=w(),s=(0,K.use)(k),c=E(o.component.checkbox.square.dash.base,{size:e,readonly:t,disabled:n},s);return(0,q.jsx)(U,{...r(c),...a,style:i})}),J.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquareDash`}})))()}export{P as a,j as c,H as i,Y as n,F as o,V as r,A as s,J as t};