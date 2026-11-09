import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,i as r,n as i,t as a}from"./inputs-EVCcd0i4.js";import{n as o,t as s}from"./story-inputs-93gyvxKe.js";import{b as c,i as l,o as u,s as d,y as f}from"./iframe-CsLIKixB.js";import{n as p,t as ee}from"./variant-story-Di2FcdOM.js";import{n as te,t as ne}from"./ellipsis-9oSyWpzf.js";import{c as re,i as ie,r as ae,s as m}from"./button-spinner-eHS1FUoR.js";import{t as oe}from"./button-B3GuFyUn.js";import{a as h,i as se,o as ce,r as g}from"./icon-button-spinner-A9fj4J6P.js";import{t as le}from"./icon-button-DxfCqB4Y.js";import{n as ue,t as _}from"./action-list-BPWvQDVT.js";import{n as de,t as fe}from"./x-R866ENYt.js";import{t as pe}from"./action-list-C54q7V-F.js";import{F as v,I as me,N as he,P as ge,a as y,b as _e,m as ve,o as ye,p as b,y as be}from"./title-group-head-title-skeleton-title-bar-DqdeFsLc.js";import{t as xe}from"./title-group-Dsnrdq9j.js";import{i as Se,r as x}from"./form-footer-BC5n5Plq.js";import{t as Ce}from"./form-DwmZqWhE.js";import{a as we,b as Te,n as Ee,o as De,t as Oe,y as ke}from"./form-field-label-text-BrZWsQco.js";import{t as Ae}from"./form-field-DxE5zJ7g.js";import{n as je,t as S}from"./text-Y3jPezbc.js";import{t as Me}from"./text-BfavOA0J.js";import{c as Ne,i as Pe,n as Fe,r as Ie,s as Le,t as Re}from"./text-input-rule-d6Yno49X.js";import{t as ze}from"./text-input-BHVOvZxz.js";import{n as Be,t as C}from"./toolbar-qsjR9vIn.js";import{t as Ve}from"./toolbar-CHxb_vy0.js";var He,w;function Ue(){return(Ue=e((()=>{c(),l(),He=t(),w=n(function({as:e=f,size:t,header:n,body:r,footer:i,style:a,...o}){let s=u(),c=d(s.component.dialog.base,{size:t});return(0,He.jsxs)(e,{...o,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},c,a],children:[n?.({size:t}),r({size:t}),i?.({size:t})]})}),w.__docgenInfo={description:`Asks for the user's full attention.`,methods:[],displayName:`Dialog`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var We,T;function E(){return(E=e((()=>{i(),s(),We={...o(e=>e.component.dialog.base),withHeader:a([!0,!1]),headerContentPart:a([`TitleGroup`,`Toolbar`]),bodyContentPart:a([`Text`,`Form`]),withFooter:a([!0,!1])},T={size:`sm`,withHeader:!0,headerContentPart:`TitleGroup`,bodyContentPart:`Text`,withFooter:!0}})))()}var D,O;function k(){return(k=e((()=>{c(),l(),D=t(),O=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.body.base,{size:t});return(0,D.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({})})}),O.__docgenInfo={description:``,methods:[],displayName:`DialogBody`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var A,j;function M(){return(M=e((()=>{c(),l(),A=t(),j=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.footer.base,{size:t});return(0,A.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({size:t,style:{alignSelf:`auto`}})})}),j.__docgenInfo={description:``,methods:[],displayName:`DialogFooter`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}var N,P;function F(){return(F=e((()=>{c(),l(),N=t(),P=n(function({as:e=f,size:t,content:n,style:r,...i}){let a=u(),o=d(a.component.dialog.header.base,{size:t});return(0,N.jsx)(e,{...i,style:[{flexDirection:`column`,justifyContent:`flex-start`,alignItems:`stretch`},o,r],children:n({size:t})})}),P.__docgenInfo={description:``,methods:[],displayName:`DialogHeader`,props:{as:{defaultValue:{value:`React.forwardRef((props, forwardedRef) => {
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
})`,computed:!0},required:!1}}}})))()}function I({withHeader:e,headerContentPart:t,bodyContentPart:n,withFooter:r,...i}){return(0,L.jsx)(w,{testID:`dialog`,...i,header:e?e=>(0,L.jsx)(P,{...e,content:e=>t===`Toolbar`?(0,L.jsx)(C,{...e,ground:`page`,content:[B(0,`Rename device`)],append:[V(0)]}):(0,L.jsx)(v,{...e,disabled:!1,head:e=>(0,L.jsx)(b,{...e,title:e=>(0,L.jsx)(y,{...e,children:`Rename device`})})})}):void 0,body:e=>(0,L.jsx)(O,{...e,content:e=>n===`Form`?(0,L.jsx)(x,{...e,size:`sm`,items:[H(0,`Name`,`Living room`),H(1,`Room`,`Ground floor`)]}):(0,L.jsx)(S,{...e,type:`body-md`,intent:`neutral`,bold:!1,emphasis:`medium`,disabled:!1,children:`Shown in your device list.`})}),footer:r?e=>(0,L.jsx)(j,{...e,content:e=>(0,L.jsx)(_,{...e,actions:[z(0),R(1)]})}):void 0})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ge;function Ke(){return(Ke=e((()=>{ee(),te(),de(),pe(),oe(),Ce(),Ae(),le(),Me(),ze(),xe(),Ve(),Ue(),E(),k(),M(),F(),L=t(),R=e=>function(t){return(0,L.jsx)(m,{...t,destructive:!1,emphasis:`high`,loading:!1,disabled:!1,label:e=>(0,L.jsx)(ae,{...e,children:`Save`})},e)},z=e=>function(t){return(0,L.jsx)(h,{...t,destructive:!1,emphasis:`low`,loading:!1,disabled:!1,icon:e=>(0,L.jsx)(g,{...e,as:ne})},e)},B=(e,t,n)=>function(r){return(0,L.jsx)(v,{...r,size:`sm`,disabled:!1,head:e=>(0,L.jsx)(b,{...e,title:e=>(0,L.jsx)(y,{...e,children:t})}),body:n?e=>(0,L.jsx)(he,{...e,subtitle:e=>(0,L.jsx)(be,{...e,children:n})}):void 0},e)},V=(e,t)=>function(n){return(0,L.jsx)(h,{...n,size:t??n.size,destructive:!1,emphasis:`low`,loading:!1,disabled:!1,icon:e=>(0,L.jsx)(g,{...e,as:fe})},e)},H=(e,t,n)=>function(r){return(0,L.jsx)(ke,{...r,invalid:!1,side:`block-start`,readonly:!1,disabled:!1,label:e=>(0,L.jsx)(we,{...e,text:e=>(0,L.jsx)(Oe,{...e,children:t})}),content:e=>(0,L.jsx)(Le,{...e,filled:!0,input:e=>(0,L.jsx)(Ie,{...e,children:n}),rule:e=>(0,L.jsx)(Re,{...e})})},e)},U=(e,t,n)=>function(r){return(0,L.jsx)(m,{...r,destructive:!1,emphasis:t,loading:!1,disabled:!1,label:e=>(0,L.jsx)(ae,{...e,children:n})},e)},W={title:`Feedback & Status/Dialog`,component:w,argTypes:We,args:T,render:I},G={},K=p(W,`size`,I),q=p(W,`withHeader`,I),J=p(W,`headerContentPart`,I),Y=p(W,`bodyContentPart`,I),X=p(W,`withFooter`,I),Z={args:{size:`md`},render:({size:e})=>(0,L.jsx)(w,{size:e,header:e=>(0,L.jsx)(P,{...e,content:e=>(0,L.jsx)(C,{...e,ground:`page`,content:[B(0,`Rename device`,`Shown in your device list.`)],append:[V(0)]})}),body:e=>(0,L.jsx)(O,{...e,content:e=>(0,L.jsx)(x,{...e,size:`sm`,items:[H(0,`Name`,`Living room`),H(1,`Room`,`Ground floor`)]})}),footer:e=>(0,L.jsx)(j,{...e,content:e=>(0,L.jsx)(_,{...e,actions:[U(0,`medium`,`Cancel`),U(1,`high`,`Save`)]})})})},Q={args:{size:`lg`},render:({size:e})=>(0,L.jsx)(w,{size:e,header:e=>(0,L.jsx)(P,{...e,content:e=>(0,L.jsx)(C,{...e,size:`md`,ground:`page`,content:[B(0,`Storage`)],append:[V(0,`md`)]})}),body:e=>(0,L.jsx)(O,{...e,content:e=>(0,L.jsx)(S,{...e,type:`body-md`,intent:`neutral`,bold:!1,emphasis:`medium`,disabled:!1,children:`12 recordings use 40 GB. Kept recordings are listed first. Remove a recording to free space.`})}),footer:e=>(0,L.jsx)(j,{...e,content:e=>(0,L.jsx)(_,{...e,size:`md`,actions:[U(0,`medium`,`Manage`),U(1,`high`,`Done`)]})})})},$={args:{size:`sm`},render:({size:e})=>(0,L.jsx)(w,{size:e,header:e=>(0,L.jsx)(P,{...e,content:e=>(0,L.jsx)(v,{...e,disabled:!1,head:e=>(0,L.jsx)(b,{...e,title:e=>(0,L.jsx)(y,{...e,children:`Delete this recording?`})})})}),body:e=>(0,L.jsx)(O,{...e,content:e=>(0,L.jsx)(S,{...e,type:`body-md`,intent:`neutral`,bold:!1,emphasis:`medium`,disabled:!1,children:`It will be gone from every device.`})}),footer:e=>(0,L.jsx)(j,{...e,content:e=>(0,L.jsx)(_,{...e,actions:[U(0,`medium`,`Keep`),U(1,`high`,`Delete`)]})})})},Ge=[`Playground`,`Size`,`WithHeader`,`HeaderContentPart`,`BodyContentPart`,`WithFooter`,`RenameDevice`,`StorageRules`,`DeleteRecording`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`variantStory(meta, "size", DialogTemplate)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`variantStory(meta, "withHeader", DialogTemplate)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`variantStory(meta, "headerContentPart", DialogTemplate)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`variantStory(meta, "bodyContentPart", DialogTemplate)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`variantStory(meta, "withFooter", DialogTemplate)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md"
  },
  render: ({
    size
  }) => <Dialog size={size} header={config => <DialogHeader {...config} content={config => <Toolbar {...config} ground="page" content={[dialogTitle(0, "Rename device", "Shown in your device list.")]} append={[closeButton(0)]} />} />} body={config => <DialogBody {...config} content={config => <Form {...config} size="sm" items={[deviceField(0, "Name", "Living room"), deviceField(1, "Room", "Ground floor")]} />} />} footer={config => <DialogFooter {...config} content={config => <ActionList {...config} actions={[labelledButton(0, "medium", "Cancel"), labelledButton(1, "high", "Save")]} />} />} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  },
  render: ({
    size
  }) => <Dialog size={size} header={config => <DialogHeader {...config} content={config => <Toolbar {...config} size="md" ground="page" content={[dialogTitle(0, "Storage")]} append={[closeButton(0, "md")]} />} />} body={config => <DialogBody {...config} content={config => <Text {...config} type="body-md" intent="neutral" bold={false} emphasis="medium" disabled={false}>
              12 recordings use 40 GB. Kept recordings are listed first. Remove a recording to free
              space.
            </Text>} />} footer={config => <DialogFooter {...config} content={config => <ActionList {...config} size="md" actions={[labelledButton(0, "medium", "Manage"), labelledButton(1, "high", "Done")]} />} />} />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: ({
    size
  }) => <Dialog size={size} header={config => <DialogHeader {...config} content={config => <TitleGroup {...config} disabled={false} head={config => <TitleGroupHead {...config} title={config => <TitleGroupHeadTitle {...config}>Delete this recording?</TitleGroupHeadTitle>} />} />} />} body={config => <DialogBody {...config} content={config => <Text {...config} type="body-md" intent="neutral" bold={false} emphasis="medium" disabled={false}>
              It will be gone from every device.
            </Text>} />} footer={config => <DialogFooter {...config} content={config => <ActionList {...config} actions={[labelledButton(0, "medium", "Keep"), labelledButton(1, "high", "Delete")]} />} />} />
}`,...$.parameters?.docs?.source}}}})))()}Ke();export{Y as BodyContentPart,$ as DeleteRecording,J as HeaderContentPart,G as Playground,Z as RenameDevice,K as Size,Q as StorageRules,X as WithFooter,q as WithHeader,Ge as __namedExportsOrder,W as default};