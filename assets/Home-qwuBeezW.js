import{j as g,r as y}from"./main-C_vkkVqa.js";var j;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(j||(j={}));/**
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
 */var G;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(G||(G={}));var F;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(F||(F={}));/**
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
 */const U=["user","model","function","system"];var H;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(H||(H={}));var $;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})($||($={}));var K;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(K||(K={}));var k;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(k||(k={}));var w;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(w||(w={}));var Y;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Y||(Y={}));var B;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(B||(B={}));var P;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(P||(P={}));/**
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
 */class _ extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class A extends _{constructor(e,n){super(e),this.response=n}}class Q extends _{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class O extends _{}/**
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
 */const nt="https://generativelanguage.googleapis.com",st="v1beta",ot="0.21.0",it="genai-js";var S;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(S||(S={}));class at{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||st;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||nt}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function rt(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${it}/${ot}`),e.join(" ")}async function ct(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",rt(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new O(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new O(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new O(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function lt(t,e,n,s,o,i){const a=new at(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},ht(i)),{method:"POST",headers:await ct(a),body:o})}}async function T(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:c}=await lt(t,e,n,s,o,i);return dt(r,c,a)}async function dt(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){ut(o,t)}return s.ok||await ft(s,t),s}function ut(t,e){let n=t;throw t instanceof Q||t instanceof O||(n=new _(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function ft(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new Q(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function ht(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function L(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),M(t.candidates[0]))throw new A(`${R(t)}`,t);return gt(t)}else if(t.promptFeedback)throw new A(`Text not available. ${R(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),M(t.candidates[0]))throw new A(`${R(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),q(t)[0]}else if(t.promptFeedback)throw new A(`Function call not available. ${R(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),M(t.candidates[0]))throw new A(`${R(t)}`,t);return q(t)}else if(t.promptFeedback)throw new A(`Function call not available. ${R(t)}`,t)},t}function gt(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function q(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Et=[w.RECITATION,w.SAFETY,w.LANGUAGE];function M(t){return!!t.finishReason&&Et.includes(t.finishReason)}function R(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];M(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function b(t){return this instanceof b?(this.v=t,this):new b(t)}function pt(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(d){s[d]&&(o[d]=function(l){return new Promise(function(f,u){i.push([d,l,f,u])>1||r(d,l)})})}function r(d,l){try{c(s[d](l))}catch(f){h(i[0][3],f)}}function c(d){d.value instanceof b?Promise.resolve(d.value.v).then(E,C):h(i[0][2],d)}function E(d){r("next",d)}function C(d){r("throw",d)}function h(d,l){d(l),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const V=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ct(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=mt(e),[s,o]=n.tee();return{stream:_t(s),response:vt(o)}}async function vt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return L(yt(e));e.push(o)}}function _t(t){return pt(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield b(n.read());if(o)break;yield yield b(L(s))}})}function mt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new _("Failed to parse stream"));return}s.close();return}o+=a;let c=o.match(V),E;for(;c;){try{E=JSON.parse(c[1])}catch{s.error(new _(`Error parsing JSON response: "${c[1]}"`));return}s.enqueue(E),o=o.substring(c[0].length),c=o.match(V)}return i()})}}})}function yt(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
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
 */async function Z(t,e,n,s){const o=await T(e,S.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return Ct(o)}async function tt(t,e,n,s){const i=await(await T(e,S.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:L(i)}}/**
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
 */function et(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function N(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Rt(e)}function Rt(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new _("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new _("No content is provided for sending chat message.");return s?e:n}function Ot(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new O("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=N(t);s.contents=[i]}return{generateContentRequest:s}}function J(t){let e;return t.contents?e=t:e={contents:[N(t)]},t.systemInstruction&&(e.systemInstruction=et(t.systemInstruction)),e}function It(t){return typeof t=="string"||Array.isArray(t)?{content:N(t)}:t}/**
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
 */const W=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],St={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function At(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new _(`First content should be with role 'user', got ${s}`);if(!U.includes(s))throw new _(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(U)}`);if(!Array.isArray(o))throw new _("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new _("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const c of W)c in r&&(i[c]+=1);const a=St[s];for(const r of W)if(!a.includes(r)&&i[r]>0)throw new _(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
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
 */const X="SILENT_ERROR";class wt{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(At(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,c;await this._sendPromise;const E=N(e),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,E]},h=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>tt(this._apiKey,this.model,C,h)).then(l=>{var f;if(l.response.candidates&&l.response.candidates.length>0){this._history.push(E);const u=Object.assign({parts:[],role:"model"},(f=l.response.candidates)===null||f===void 0?void 0:f[0].content);this._history.push(u)}else{const u=R(l.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}d=l}),await this._sendPromise,d}async sendMessageStream(e,n={}){var s,o,i,a,r,c;await this._sendPromise;const E=N(e),C={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(c=this.params)===null||c===void 0?void 0:c.cachedContent,contents:[...this._history,E]},h=Object.assign(Object.assign({},this._requestOptions),n),d=Z(this._apiKey,this.model,C,h);return this._sendPromise=this._sendPromise.then(()=>d).catch(l=>{throw new Error(X)}).then(l=>l.response).then(l=>{if(l.candidates&&l.candidates.length>0){this._history.push(E);const f=Object.assign({},l.candidates[0].content);f.role||(f.role="model"),this._history.push(f)}else{const f=R(l);f&&console.warn(`sendMessageStream() was unsuccessful. ${f}. Inspect response object for details.`)}}).catch(l=>{l.message!==X&&console.error(l)}),d}}/**
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
 */async function bt(t,e,n,s){return(await T(e,S.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
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
 */async function Nt(t,e,n,s){return(await T(e,S.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function Tt(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await T(e,S.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
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
 */class z{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=et(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=J(e),i=Object.assign(Object.assign({},this._requestOptions),n);return tt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=J(e),i=Object.assign(Object.assign({},this._requestOptions),n);return Z(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new wt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const s=Ot(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return bt(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=It(e),o=Object.assign(Object.assign({},this._requestOptions),n);return Nt(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return Tt(this.apiKey,this.model,e,s)}}/**
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
 */class xt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new z(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,s){if(!e.name)throw new O("Cached content must contain a `name` field.");if(!e.model)throw new O("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,c=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===c)continue}throw new O(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new z(this.apiKey,i,s)}}async function Mt(t,e){const n="AIzaSyAo0mn6xUaUfoLVAH-ocsV5KyOr1GteK-8",o=new xt(n).getGenerativeModel({model:"gemini-1.5-flash"}),i=t.type;async function a(r){return new Promise((c,E)=>{const C=new FileReader;C.onload=()=>{if(C.result&&typeof C.result=="string"){const h=C.result.split(",")[1];c({inlineData:{data:h,mimeType:i}})}else E(new Error("Failed to read file as Base64."))},C.onerror=()=>{E(C.error||new Error("An unknown error occurred while reading the file."))},C.readAsDataURL(r)})}try{const r=await a(t),E=await(await o.generateContent([e,r])).response.text();return console.log("Response Text:",E),E}catch(r){return console.error("Error generating content:",r),""}}const Dt=({response:t})=>g.jsx(g.Fragment,{children:g.jsx("h1",{children:t})}),Lt=t=>{const e=/\{number: ([0-9.]+), x: ([0-9.]+), y: ([0-9.]+)\}/g,n=[];let s,o=1;for(;(s=e.exec(t))!==null;){const[i,a,r,c]=s;n.push({id:o,number:parseFloat(a),x:parseFloat(r),y:parseFloat(c)}),o++}return n},jt=({image:t,response:e})=>{const n=y.useRef(null),[s,o]=y.useState({width:0,height:0}),[i,a]=y.useState([]),[r,c]=y.useState({}),[E,C]=y.useState(0);y.useEffect(()=>{const u=Lt(e);a(u);const p={};u.forEach(v=>{p[v.id]=1}),c(p),f(u,p)},[e]);const h=u=>{const p=u.currentTarget;o({width:p.offsetWidth,height:p.offsetHeight})},d=(u,p)=>{const v=i.map(m=>m.id===u?{...m,number:p}:m);a(v),f(v,r)},l=(u,p)=>{const v={...r,[u]:p};c(v),f(i,v)},f=(u,p)=>{const v=u.reduce((D,x)=>D+(x.number||0)*(p[x.id]||0),0),m=Math.round(v*1e4)/1e4;C(m)};return g.jsxs("div",{ref:n,style:{position:"relative",display:"inline-block",border:"1px solid #ccc"},children:[g.jsx("img",{src:t,alt:"Captured",onLoad:h,style:{display:"block",width:"100%",height:"auto",objectFit:"contain"}}),s.width>0&&i.map(({id:u,number:p,x:v,y:m})=>{const D=(v+.1)*s.width,x=m*s.height;return g.jsxs("div",{style:{position:"absolute",left:`${D}px`,top:`${x}px`,transform:"translate(-50%, -50%)",display:"flex",alignItems:"center",gap:"4px"},children:[g.jsx("input",{type:"number",step:"1",value:r[u],onChange:I=>{I.target.value!=null&&l(u,parseFloat(I.target.value))},onBlur:I=>{console.log(I),I.target.value==""&&l(u,0)},style:{width:"20px",textAlign:"center"}}),g.jsx("input",{type:"number",value:p,onChange:I=>d(u,Number(I.target.value)),style:{width:"50px",textAlign:"center"}})]},u)}),g.jsxs("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",padding:"10px 20px",backgroundColor:"rgba(0, 0, 0, 0.7)",color:"#fff",fontSize:"18px",borderRadius:"5px"},children:["合計: ",E]})]})},Ft=()=>{const t="Please extract the numbers visible in the image. For each number, provide the coordinates relative to the image, assuming the top-left corner has coordinates x=0, y=0, and the bottom-right corner has coordinates x=1, y=1. Output the results in the following format: {number: <extracted number>, x: <x-coordinate>, y: <y-coordinate>}. Ensure that each entry is on a new line and is formatted exactly as described. If a number includes a decimal point, ensure it is recognized as a decimal and handled accurately. Do not address or mention anything other than the specified output format.",[e,n]=y.useState(null),[s,o]=y.useState(""),i=y.useRef(null),a=y.useRef(null),r=async()=>{try{const h=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});i.current&&(i.current.srcObject=h,i.current.play(),n(null))}catch(h){console.error("Error accessing camera:",h)}},c=async()=>{if(i.current&&a.current){const h=a.current,d=i.current,l=h.getContext("2d");if(l){h.width=d.videoWidth,h.height=d.videoHeight,l.drawImage(d,0,0,h.width,h.height);const f=h.toDataURL("image/png");n(f),d.srcObject.getTracks().forEach(m=>m.stop());const p=E(f,`photo-${Date.now()}.png`),v=await Mt(p,t);o(v)}}},E=(h,d)=>{const l=h.split(","),f=l[0].match(/:(.*?);/),u=f?f[1]:"application/octet-stream",p=atob(l[1]);let v=p.length;const m=new Uint8Array(v);for(;v--;)m[v]=p.charCodeAt(v);return new File([m],d,{type:u})},C=()=>{window.location.reload()};return r(),g.jsxs(g.Fragment,{children:[g.jsx("h1",{children:"SnapSum"}),g.jsxs("div",{children:[e?g.jsx("div",{children:g.jsx(jt,{image:e,response:s})}):g.jsx("video",{ref:i,style:{width:"100%",maxWidth:"500px"}}),g.jsx("canvas",{ref:a,style:{display:"none"}})]}),g.jsx("button",{onClick:c,children:"撮る"}),g.jsx("button",{onClick:C,children:"リセット"}),s&&g.jsx("p",{children:s}),g.jsx(Dt,{response:s})]})};export{Ft as default};
