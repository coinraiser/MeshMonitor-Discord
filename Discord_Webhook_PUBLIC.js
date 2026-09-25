#!/usr/bin/env node
// mm_meta:
//   name: Discord Webhook PUBLIC
//   emoji: 👀
//   language: JavaScript
//   version: 2.0.1

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const id = process.env.WEBHOOK_ID;
const token = process.env.WEBHOOK_TOKEN;
const webhookUrl = `https://discord.com/api/webhooks/${id}/${token}`;

const args = process.argv.slice(2);
const snr = args[args.indexOf('--snr') + 1] || 'N/A';
const rssi = args[args.indexOf('--rssi') + 1] || 'N/A';
const hops = args[args.indexOf('--hops') + 1] || 'N/A';
const from = args[args.indexOf('--fromName') + 1] || 'N/A';
const text = args[args.indexOf('--text') + 1] || 'N/A';
console.log(process.argv);

fetch(webhookUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    
    embeds: [{
      "author": {
    "name" : "MeshMonitor",
    "icon_url" : "https://dashboardicons.com/pb/api/files/community_gallery/9ve5s2nwdgfzzn9/meshmonitor_0fctjjqa2v.png"
          },
"title": `New 👀  message from ${from}`,
"description": `${text}`,
 
"thumbnail": {
          "url": "https://i.postimg.cc/3rsM9hrY/meshcore-Hrvatska.png"
          },
"image" : {
          "url": "https://blog.meshcore.io/assets/images/2026/07/04/meshcore-banner-short.png"
          },
"fields": [
          {
          "name": "🐇  Hops",
          "value": `${hops} hop(s)`,
          "inline": true
          },
          {
          "name": "📢  SNR",
          "value": `${snr} dB`,
          "inline": true
          },
          {
          "name": "📟  RSSI",
          "value": `${rssi} dBm`,
          "inline": true
          }
          ],
    color: 3447003
}]
  })
}).catch(err => console.error(err));
