import{j as g,r as _}from"./main-D0SfjhQm.js";var M;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(M||(M={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(D||(D={}));var L;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(L||(L={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=["user","model","function","system"];var j;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(j||(j={}));var U;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(U||(U={}));var F;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(F||(F={}));var H;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(H||(H={}));var w;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(w||(w={}));var $;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})($||($={}));var K;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(K||(K={}));var k;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(k||(k={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class S extends C{constructor(e,n){super(e),this.response=n}}class W extends C{constructor(e,n,o,s){super(e),this.status=n,this.statusText=o,this.errorDetails=s}}class R extends C{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="https://generativelanguage.googleapis.com",tt="v1beta",et="0.21.0",nt="genai-js";var O;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(O||(O={}));class ot{constructor(e,n,o,s,i){this.model=e,this.task=n,this.apiKey=o,this.stream=s,this.requestOptions=i}toString(){var e,n;const o=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||tt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||Z}/${o}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function st(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${nt}/${et}`),e.join(" ")}async function it(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",st(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let o=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(s){throw new R(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${s.message}`)}for(const[s,i]of o.entries()){if(s==="x-goog-api-key")throw new R(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new R(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function at(t,e,n,o,s,i){const a=new ot(t,e,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},lt(i)),{method:"POST",headers:await it(a),body:s})}}async function N(t,e,n,o,s,i={},a=fetch){const{url:r,fetchOptions:l}=await at(t,e,n,o,s,i);return rt(r,l,a)}async function rt(t,e,n=fetch){let o;try{o=await n(t,e)}catch(s){ct(s,t)}return o.ok||await dt(o,t),o}function ct(t,e){let n=t;throw t instanceof W||t instanceof R||(n=new C(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function dt(t,e){let n="",o;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,o=s.error.details)}catch{}throw new W(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,o)}function lt(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new S(`${y(t)}`,t);return ut(t)}else if(t.promptFeedback)throw new S(`Text not available. ${y(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new S(`${y(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Y(t)[0]}else if(t.promptFeedback)throw new S(`Function call not available. ${y(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new S(`${y(t)}`,t);return Y(t)}else if(t.promptFeedback)throw new S(`Function call not available. ${y(t)}`,t)},t}function ut(t){var e,n,o,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Y(t){var e,n,o,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(s=(o=t.candidates)===null||o===void 0?void 0:o[0].content)===null||s===void 0?void 0:s.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const ft=[w.RECITATION,w.SAFETY,w.LANGUAGE];function T(t){return!!t.finishReason&&ft.includes(t.finishReason)}function y(t){var e,n,o;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((o=t.candidates)===null||o===void 0)&&o[0]){const i=t.candidates[0];T(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function A(t){return this instanceof A?(this.v=t,this):new A(t)}function ht(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(t,e||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(c){o[c]&&(s[c]=function(d){return new Promise(function(u,p){i.push([c,d,u,p])>1||r(c,d)})})}function r(c,d){try{l(o[c](d))}catch(u){f(i[0][3],u)}}function l(c){c.value instanceof A?Promise.resolve(c.value.v).then(h,E):f(i[0][2],c)}function h(c){r("next",c)}function E(c){r("throw",c)}function f(c,d){c(d),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function gt(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=Ct(e),[o,s]=n.tee();return{stream:pt(o),response:Et(s)}}async function Et(t){const e=[],n=t.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return x(_t(e));e.push(s)}}function pt(t){return ht(this,arguments,function*(){const n=t.getReader();for(;;){const{value:o,done:s}=yield A(n.read());if(s)break;yield yield A(x(o))}})}function Ct(t){const e=t.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(s.trim()){o.error(new C("Failed to parse stream"));return}o.close();return}s+=a;let l=s.match(B),h;for(;l;){try{h=JSON.parse(l[1])}catch{o.error(new C(`Error parsing JSON response: "${l[1]}"`));return}o.enqueue(h),s=s.substring(l[0].length),l=s.match(B)}return i()})}}})}function _t(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const o of t){if(o.candidates)for(const s of o.candidates){const i=s.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:s.index}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].groundingMetadata=s.groundingMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[]});const a={};for(const r of s.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}o.usageMetadata&&(n.usageMetadata=o.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t,e,n,o){const s=await N(e,O.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),o);return gt(s)}async function z(t,e,n,o){const i=await(await N(e,O.GENERATE_CONTENT,t,!1,JSON.stringify(n),o)).json();return{response:x(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function b(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return vt(e)}function vt(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let o=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),o=!0);if(o&&s)throw new C("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new C("No content is provided for sending chat message.");return o?e:n}function mt(t,e){var n;let o={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new R("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=t.contents}else if(s)o=Object.assign(Object.assign({},o),t.generateContentRequest);else{const i=b(t);o.contents=[i]}return{generateContentRequest:o}}function P(t){let e;return t.contents?e=t:e={contents:[b(t)]},t.systemInstruction&&(e.systemInstruction=Q(t.systemInstruction)),e}function yt(t){return typeof t=="string"||Array.isArray(t)?{content:b(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Rt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Ot(t){let e=!1;for(const n of t){const{role:o,parts:s}=n;if(!e&&o!=="user")throw new C(`First content should be with role 'user', got ${o}`);if(!G.includes(o))throw new C(`Each item should include role field. Got ${o} but valid roles are: ${JSON.stringify(G)}`);if(!Array.isArray(s))throw new C("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new C("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of s)for(const l of q)l in r&&(i[l]+=1);const a=Rt[o];for(const r of q)if(!a.includes(r)&&i[r]>0)throw new C(`Content with role '${o}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="SILENT_ERROR";class It{constructor(e,n,o,s={}){this.model=n,this.params=o,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,o!=null&&o.history&&(Ot(o.history),this._history=o.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var o,s,i,a,r,l;await this._sendPromise;const h=b(e),E={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},f=Object.assign(Object.assign({},this._requestOptions),n);let c;return this._sendPromise=this._sendPromise.then(()=>z(this._apiKey,this.model,E,f)).then(d=>{var u;if(d.response.candidates&&d.response.candidates.length>0){this._history.push(h);const p=Object.assign({parts:[],role:"model"},(u=d.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(p)}else{const p=y(d.response);p&&console.warn(`sendMessage() was unsuccessful. ${p}. Inspect response object for details.`)}c=d}),await this._sendPromise,c}async sendMessageStream(e,n={}){var o,s,i,a,r,l;await this._sendPromise;const h=b(e),E={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},f=Object.assign(Object.assign({},this._requestOptions),n),c=X(this._apiKey,this.model,E,f);return this._sendPromise=this._sendPromise.then(()=>c).catch(d=>{throw new Error(V)}).then(d=>d.response).then(d=>{if(d.candidates&&d.candidates.length>0){this._history.push(h);const u=Object.assign({},d.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=y(d);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(d=>{d.message!==V&&console.error(d)}),c}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e,n,o){return(await N(e,O.COUNT_TOKENS,t,!1,JSON.stringify(n),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e,n,o){return(await N(e,O.EMBED_CONTENT,t,!1,JSON.stringify(n),o)).json()}async function At(t,e,n,o){const s=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await N(e,O.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),o)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n,o={}){this.apiKey=e,this._requestOptions=o,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Q(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var o;const s=P(e),i=Object.assign(Object.assign({},this._requestOptions),n);return z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}async generateContentStream(e,n={}){var o;const s=P(e),i=Object.assign(Object.assign({},this._requestOptions),n);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),i)}startChat(e){var n;return new It(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const o=mt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return St(this.apiKey,this.model,o,s)}async embedContent(e,n={}){const o=yt(e),s=Object.assign(Object.assign({},this._requestOptions),n);return wt(this.apiKey,this.model,o,s)}async batchEmbedContents(e,n={}){const o=Object.assign(Object.assign({},this._requestOptions),n);return At(this.apiKey,this.model,e,o)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new C("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new J(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,o){if(!e.name)throw new R("Cached content must contain a `name` field.");if(!e.model)throw new R("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===l)continue}throw new R(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new J(this.apiKey,i,o)}}async function Nt(t,e){const n="AIzaSyAo0mn6xUaUfoLVAH-ocsV5KyOr1GteK-8",s=new bt(n).getGenerativeModel({model:"gemini-1.5-flash"}),i=t.type;async function a(r){return new Promise((l,h)=>{const E=new FileReader;E.onload=()=>{if(E.result&&typeof E.result=="string"){const f=E.result.split(",")[1];l({inlineData:{data:f,mimeType:i}})}else h(new Error("Failed to read file as Base64."))},E.onerror=()=>{h(E.error||new Error("An unknown error occurred while reading the file."))},E.readAsDataURL(r)})}try{const r=await a(t),h=await(await s.generateContent([e,r])).response.text();return console.log("Response Text:",h),h}catch(r){return console.error("Error generating content:",r),""}}const Tt=({response:t})=>g.jsx(g.Fragment,{children:g.jsx("h1",{children:t})}),xt=t=>{const e=/\{number: ([0-9.]+), x: ([0-9.]+), y: ([0-9.]+)\}/g,n=[];let o,s=1;for(;(o=e.exec(t))!==null;){const[i,a,r,l]=o;n.push({id:s,number:parseFloat(a),x:parseFloat(r),y:parseFloat(l)}),s++}return n},Mt=({image:t,response:e})=>{const n=_.useRef(null),[o,s]=_.useState({width:0,height:0}),[i,a]=_.useState([]),[r,l]=_.useState(0);_.useEffect(()=>{const c=xt(e);a(c),f(c)},[e]);const h=c=>{const d=c.currentTarget;s({width:d.offsetWidth,height:d.offsetHeight})},E=(c,d)=>{const u=i.map(p=>p.id===c?{...p,number:d}:p);a(u),f(u)},f=c=>{const d=c.reduce((p,v)=>p+(v.number||0),0),u=Math.round(d*1e4)/1e4;l(u)};return g.jsxs("div",{ref:n,style:{position:"relative",display:"inline-block",border:"1px solid #ccc"},children:[g.jsx("img",{src:t,alt:"Captured",onLoad:h,style:{display:"block",width:"100%",height:"auto",objectFit:"contain"}}),o.width>0&&i.map(({id:c,number:d,x:u,y:p})=>{const v=(u+.1)*o.width,m=p*o.height;return g.jsx("input",{type:"number",value:d,onChange:I=>E(c,Number(I.target.value)),style:{position:"absolute",left:`${v}px`,top:`${m}px`,transform:"translate(-50%, -50%)",width:"50px",height:"25px",textAlign:"center",fontSize:"14px",border:"1px solid black",background:"white"}},c)}),g.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"#fff",fontSize:"18px",borderRadius:"5px"},children:["合計: ",r]})]})},Lt=()=>{const t="Please extract the numbers visible in the image. For each number, provide the coordinates relative to the image, assuming the top-left corner has coordinates x=0, y=0, and the bottom-right corner has coordinates x=1, y=1. Output the results in the following format: {number: <extracted number>, x: <x-coordinate>, y: <y-coordinate>}. Ensure that each entry is on a new line and is formatted exactly as described. If a number includes a decimal point, ensure it is recognized as a decimal and handled accurately. Do not address or mention anything other than the specified output format.",[e,n]=_.useState(null),[o,s]=_.useState(""),i=_.useRef(null),a=_.useRef(null),r=async()=>{try{const f=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});i.current&&(i.current.srcObject=f,i.current.play(),n(null))}catch(f){console.error("Error accessing camera:",f)}},l=async()=>{if(i.current&&a.current){const f=a.current,c=i.current,d=f.getContext("2d");if(d){f.width=c.videoWidth,f.height=c.videoHeight,d.drawImage(c,0,0,f.width,f.height);const u=f.toDataURL("image/png");n(u),c.srcObject.getTracks().forEach(I=>I.stop());const v=h(u,`photo-${Date.now()}.png`),m=await Nt(v,t);s(m)}}},h=(f,c)=>{const d=f.split(","),u=d[0].match(/:(.*?);/),p=u?u[1]:"application/octet-stream",v=atob(d[1]);let m=v.length;const I=new Uint8Array(m);for(;m--;)I[m]=v.charCodeAt(m);return new File([I],c,{type:p})},E=()=>{window.location.reload()};return r(),g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:"SnapSum"}),g.jsxs("div",{children:[e?g.jsx("div",{children:g.jsx(Mt,{image:e,response:o})}):g.jsx("video",{ref:i,style:{width:"100%",maxWidth:"500px"}}),g.jsx("canvas",{ref:a,style:{display:"none"}})]}),g.jsx("button",{onClick:E,children:"Start"}),g.jsx("button",{onClick:l,children:"Capture"}),o&&g.jsx("p",{children:o}),g.jsx(Tt,{response:o})]})};export{Lt as default};
