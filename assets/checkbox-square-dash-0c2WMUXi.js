import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-BysMvcJ3.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i}from"./inputs-EVCcd0i4.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./use-interaction-state-DCnx_bf2.js";import{l as d,u as f}from"./module-CKa45VFv.js";import{i as p,n as m,r as h,t as g}from"./interaction-state-Cs7nJWgF.js";import{b as _,f as v,i as y,o as b,p as x,s as S,y as C}from"./iframe-CsLIKixB.js";import{n as w,t as T}from"./check-CUA-0egs.js";import{n as E,t as D}from"./minus-BDBm_9AE.js";var O,k,A;function j(){return(j=e((()=>{p(),m(),l(),u(),v(),c(),y(),O=n(),k=h(`CheckboxState`,g),A=r(function({as:e=a,invalid:t,size:n,selected:r,readonly:i,disabled:c,square:l,linkedState:u,style:d,...f}){let p=b(),m=x(c),{currentState:h,propsWithHandlers:g}=s({...f,disabled:m}),_=u??h,v=S(p.component.checkbox.base,{size:n,readonly:i,disabled:c},_);return(0,O.jsx)(e,{...g,style:[o,{flexDirection:`row`,justifyContent:`center`,alignItems:`center`,alignSelf:`flex-start`},v,d],children:(0,O.jsx)(k,{value:_,children:l({invalid:t,size:n,selected:r,readonly:i,disabled:c})})})}),A.__docgenInfo={description:`Turns an option on or off. Label it with a form field.`,methods:[],displayName:`Checkbox`,props:{as:{defaultValue:{value:`memo(/*#__PURE__*/forwardRef(Pressable))`,computed:!0},required:!1}}}})))()}var M,N,P;function F(){return(F=e((()=>{M=t(),_(),y(),j(),N=n(),P=r(function({as:e=C,invalid:t,size:n,selected:r,readonly:i,disabled:a,icon:o,style:s,...c}){let l=b(),u=(0,M.use)(k),d=S(l.component.checkbox.square.base,{invalid:t,size:n,selected:r,readonly:i,disabled:a},u);return(0,N.jsx)(e,{...c,style:[{flexDirection:`row`,justifyContent:`center`,alignItems:`center`},d,s],children:o?.({size:n,readonly:i,disabled:a})})}),P.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquare`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var I,L,R;function z(){return(z=e((()=>{f(),I=t(),w(),y(),j(),L=n(),R=r(function({size:e,readonly:t,disabled:n,style:r,...i}){let a=b(),o=(0,I.use)(k),s=S(a.component.checkbox.square.check.base,{size:e,readonly:t,disabled:n},o);return(0,L.jsx)(T,{...d(s),...i,style:r})}),R.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquareCheck`}})))()}var B,V,H;function U(){return(U=e((()=>{f(),B=t(),E(),y(),j(),V=n(),H=r(function({size:e,readonly:t,disabled:n,style:r,...i}){let a=b(),o=(0,B.use)(k),s=S(a.component.checkbox.square.dash.base,{size:e,readonly:t,disabled:n},o);return(0,V.jsx)(D,{...d(s),...i,style:r})}),H.__docgenInfo={description:``,methods:[],displayName:`CheckboxSquareDash`}})))()}export{P as a,j as c,z as i,U as n,F as o,R as r,A as s,H as t};