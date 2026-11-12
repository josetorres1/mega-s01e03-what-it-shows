import{t as e}from"./DK3Fl9T5.js";import{E as t,F as n,H as r,I as i,L as a,N as o,R as s,S as c,T as l,U as u,W as d,_ as f,k as p,q as m,r as h,t as g,w as _}from"./CHfFqfNT.js";import{t as v}from"./DkoUumqI.js";import{n as y,t as b}from"./YCV98jUa.js";import{t as x}from"./BxJynscm.js";var S=`0123456789ABCDEFGHJKMNPQRSTVWXYZ`;function C(e,t){let n=t>>>0;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n}function w(e){let t=e.trim(),n=C(t,2166136261),r=C(t,2654435769),i=BigInt(n)<<8n|BigInt(r&255),a=``;for(let e=0;e<8;e++)a=S[Number(i&31n)]+a,i>>=5n;return`DR-${a.slice(0,4)}-${a.slice(4)}`}var T=t(`<p class="stamp svelte-1280m42">desk ref <b class="svelte-1280m42"> </b></p>`),E=t(`<p class="stamp missing svelte-1280m42">no desk ref: this page isn't signed (no <code>signature</code> in its frontmatter)</p>`);function D(e,t){d(t,!0);let h=r(()=>t.signature?w(t.signature):null);var g=l(),v=i(g),y=e=>{var t=T(),r=s(n(t)),i=a(r,!0);m(t),o(()=>c(i,p(h))),_(e,t)},b=e=>{var t=E();_(e,t)};f(v,e=>{p(h)?e(y):e(b,-1)}),_(e,g),u()}var O=e({default:()=>L,metadata:()=>k}),k={layout:`runbook`,title:`0002 · Split ticket 4471 by cause`,owner:`josetorres1`,status:`accepted`,reviewed:`2026-11-12`,signature:`Jose Torres / josetorres1 / MEGA S01E03`},{layout:A,title:j,owner:M,status:N,reviewed:P,signature:F}=k,I=t(`<h2>Decision</h2> <p>This record replaces <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a>.
Keep that accepted record as history. Stop merging reports by subject alone.</p> <p>Merge reports only when evidence shows the same cause. Read the report body,
resolve the tenant, and check its locale, booking-form version, and channel.
Keep reports separate when the cause is unknown. Ask for the missing evidence.</p> <h2>What the rendered incident shows</h2> <p>The <a href="/kb/incidents/4471">incident page</a> calls the ticket one known parser bug.
Its rendered table contradicts that claim. The table separates a shared parser
failure from an incorrect hint in booking-v3.</p> <!> <p>The export can contain the same report more than once. Count each report ID
once, then select reports merged into the incident. Use the tenant directory
and the report channel to classify them. Browser locale and intake tags are
initial guesses, not confirmed causes.</p> <h3>Shared parser</h3> <p>For a day-first tenant, the shared parser reads a day-first date as month first.
An ambiguous date can therefore select the wrong month and day. App and email
reports follow this cause. Form reports also follow it when the tenant uses
booking-v2.</p> <p>Track this problem in the <a href="https://github.com/josetorres1/mega-s01e03-what-it-shows/issues/1" rel="nofollow">parser issue</a>.</p> <p>Engineering must make parsing follow the documented input contract. Confirm the
result with a day-first tenant and an ambiguous date. Include app, email, and
booking-v2 entry paths. A hint-only change will not fix these reports.</p> <h3>Booking-v3 hint</h3> <p>For a day-first tenant on booking-v3, the form displays <code>MM/DD/YYYY</code> but reads the
input using the tenant’s day-first convention. A person who follows the hint can
therefore select the wrong date. These form reports need a separate ticket and fix.</p> <p>Engineering must make the visible hint agree with the form’s parsing convention.
Confirm that a person can follow the hint and obtain the intended date. Include
a day-first booking-v3 tenant. A shared-parser change alone does not correct the hint.</p> <p>Track this problem in the <a href="https://github.com/josetorres1/mega-s01e03-what-it-shows/issues/2" rel="nofollow">booking-v3 hint issue</a>.</p> <h2>Reports that need care</h2> <p>The table notes reports that the desk read as a one-day move. They remain included
in their tenant-based cause counts. Their wording alone does not establish a
separate timezone bug. Check the entered date, stored date, timezone, and displayed
date before changing that classification. Do not count them again as another issue.</p> <h2>Arrival time is not merge time</h2> <!> <p>Reports arrived across several months. The merge spike reflects desk activity,
not a matching spike in new reports. A merge timestamp does not establish when a
failure began. Use receipt times for arrival trends and merge times for desk activity.</p> <h2>Check the rule</h2> <!> <p>Matching subjects can hide different causes. Different subjects and channels can
also describe the same cause. An unknown tenant is not evidence for a merge.</p> <h2>Review and limits</h2> <p>The original triage procedure and decision carry old review dates. Their rendered
stale warnings require a new review before use. A recent review date on the
incident page does not make its one-bug claim correct.</p> <p>This page uses the knowledge base export dated 2026-10-04. It is not a live queue.
The desk continues to work. Reconcile later reports and ticket changes before
operational use. This decision does not claim that either product bug is fixed.</p> <!>`,1);function L(e,t){let n=g(t,[`children`,`$$slots`,`$$events`,`$$legacy`]);v(e,h(()=>n,()=>k,{children:(e,t)=>{var n=I(),r=s(i(n),10);y(r,{ticket:4471});var a=s(r,26);b(a,{ticket:4471});var o=s(a,6);x(o,{}),D(s(o,10),{get signature(){return F}}),_(e,n)},$$slots:{default:!0}}))}export{L as n,O as t};