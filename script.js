/* ─── DATA ─────────────────────────────── */
const DB = {
    notifs: [
        { id: 1, txt: '<strong>Ahmed Raza</strong> completed a $4,200 order', time: '2 min ago', unread: true },
        { id: 2, txt: '<strong>Revenue milestone</strong> — monthly target at 92%', time: '18 min ago', unread: true },
        { id: 3, txt: '<strong>Alert:</strong> Server response spiked to 890ms', time: '1 hr ago', unread: true },
        { id: 4, txt: 'New user <strong>Fatima Malik</strong> joined as Editor', time: '3 hr ago', unread: false },
        { id: 5, txt: 'Weekly digest <strong>auto-generated</strong> & sent', time: 'Yesterday', unread: false },
    ],
    activity: [
        { ico: '💰', bg: 'rgba(16,185,129,.13)', txt: '<strong>Order #4821</strong> received · $1,240 from Ahmed Raza', t: '3 min ago' },
        { ico: '👤', bg: 'rgba(14,165,233,.13)', txt: '<strong>Sara Khan</strong> updated profile & notification settings', t: '14 min ago' },
        { ico: '📊', bg: 'rgba(99,102,241,.13)', txt: 'Weekly analytics report <strong>auto-generated</strong>', t: '1 hr ago' },
        { ico: '🚨', bg: 'rgba(245,158,11,.13)', txt: '<strong>High bounce rate</strong> on /landing page — 58%', t: '2 hr ago' },
        { ico: '✅', bg: 'rgba(16,185,129,.13)', txt: 'Deployment <strong>v2.1.0</strong> to production completed', t: '3 hr ago' },
    ],
    products: [
        { name: 'Pro Analytics Suite', cat: 'Software', rev: '$18,420', pct: 95 },
        { name: 'DataStream API', cat: 'API Access', rev: '$14,210', pct: 73 },
        { name: 'NexaBoard Enterprise', cat: 'Dashboard', rev: '$11,800', pct: 61 },
        { name: 'Insight Reports', cat: 'Add-on', rev: '$8,650', pct: 44 },
        { name: 'Team Collab Kit', cat: 'Bundle', rev: '$5,920', pct: 30 },
    ],
    users: [
        { id: 1, name: 'Ahmed Raza', email: 'ahmed.r@nexaboard.io', role: 'Admin', status: 'Active', joined: '12 Jan 2025', c: '#6366f1' },
        { id: 2, name: 'Sara Khan', email: 'sara.k@nexaboard.io', role: 'Editor', status: 'Active', joined: '18 Jan 2025', c: '#10b981' },
        { id: 3, name: 'Omar Farooq', email: 'omar.f@nexaboard.io', role: 'Viewer', status: 'Inactive', joined: '22 Jan 2025', c: '#f59e0b' },
        { id: 4, name: 'Ayesha Noor', email: 'ayesha.n@nexaboard.io', role: 'Editor', status: 'Active', joined: '01 Feb 2025', c: '#0ea5e9' },
        { id: 5, name: 'Bilal Hussain', email: 'bilal.h@nexaboard.io', role: 'Viewer', status: 'Active', joined: '05 Feb 2025', c: '#8b5cf6' },
        { id: 6, name: 'Fatima Malik', email: 'fatima.m@nexaboard.io', role: 'Admin', status: 'Active', joined: '14 Feb 2025', c: '#f43f5e' },
        { id: 7, name: 'Zain Ahmed', email: 'zain.a@nexaboard.io', role: 'Editor', status: 'Inactive', joined: '20 Feb 2025', c: '#f59e0b' },
        { id: 8, name: 'Hina Baig', email: 'hina.b@nexaboard.io', role: 'Viewer', status: 'Active', joined: '01 Mar 2025', c: '#06b6d4' },
        { id: 9, name: 'Kamran Malik', email: 'kamran.m@nexaboard.io', role: 'Editor', status: 'Active', joined: '08 Mar 2025', c: '#60a5fa' },
        { id: 10, name: 'Nadia Siddiqui', email: 'nadia.s@nexaboard.io', role: 'Viewer', status: 'Active', joined: '15 Mar 2025', c: '#ec4899' },
        { id: 11, name: 'Usman Tariq', email: 'usman.t@nexaboard.io', role: 'Admin', status: 'Active', joined: '22 Mar 2025', c: '#f472b6' },
        { id: 12, name: 'Rabia Qureshi', email: 'rabia.q@nexaboard.io', role: 'Viewer', status: 'Inactive', joined: '02 Apr 2025', c: '#2dd4bf' },
        { id: 13, name: 'Hassan Ali', email: 'hassan.a@nexaboard.io', role: 'Editor', status: 'Active', joined: '10 Apr 2025', c: '#818cf8' },
        { id: 14, name: 'Sana Mirza', email: 'sana.m@nexaboard.io', role: 'Viewer', status: 'Active', joined: '18 Apr 2025', c: '#fb923c' },
        { id: 15, name: 'Tariq Mehmood', email: 'tariq.m@nexaboard.io', role: 'Editor', status: 'Active', joined: '25 Apr 2025', c: '#10b981' },
    ],
    reports: [
        { title: 'Monthly Revenue', desc: 'Full revenue breakdown by channel and product category for the current month.', ico: '💰', ibg: 'rgba(16,185,129,.12)', ic: '#10b981', sz: '1.2 MB', dt: 'Jun 2025' },
        { title: 'User Growth', desc: 'New signups, churn analysis, and retention cohorts for the last 90 days.', ico: '👥', ibg: 'rgba(14,165,233,.12)', ic: '#0ea5e9', sz: '0.8 MB', dt: 'Jun 2025' },
        { title: 'Traffic Analysis', desc: 'Page views, sessions, bounce rates, and top referral sources this month.', ico: '📈', ibg: 'rgba(99,102,241,.12)', ic: '#6366f1', sz: '1.5 MB', dt: 'Jun 2025' },
        { title: 'Product Performance', desc: 'Sales velocity, return rates, and margin analysis per SKU this quarter.', ico: '📦', ibg: 'rgba(139,92,246,.12)', ic: '#8b5cf6', sz: '2.1 MB', dt: 'Jun 2025' },
        { title: 'Quarterly Summary', desc: 'Executive KPI summary across all departments including YoY comparison.', ico: '📋', ibg: 'rgba(245,158,11,.12)', ic: '#f59e0b', sz: '3.4 MB', dt: 'Q2 2025' },
        { title: 'Security Audit', desc: 'Login events, failed auth attempts, and suspicious IP activity log.', ico: '🔒', ibg: 'rgba(244,63,94,.12)', ic: '#f43f5e', sz: '0.6 MB', dt: 'Jun 2025' },
    ],
    statBoxes: [
        { l: 'MRR', v: '$28,400', ch: '+6.8%', up: true, cls: 'g' },
        { l: 'ARR', v: '$340,800', ch: '+14.2%', up: true, cls: 'b' },
        { l: 'Avg. Order', v: '$124', ch: '−2.1%', up: false, cls: 'p' },
        { l: 'Churn Rate', v: '1.8%', ch: '−0.3%', up: true, cls: 'a' },
    ],
    charts: {
        rev6m: { lbl: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], actual: [52000, 61000, 57000, 73000, 69000, 84320], target: [60000, 60000, 65000, 70000, 75000, 80000] },
        rev1y: { lbl: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], actual: [38000, 42000, 47000, 51000, 55000, 60000, 52000, 61000, 57000, 73000, 69000, 84320], target: [45000, 48000, 50000, 55000, 58000, 62000, 60000, 60000, 65000, 70000, 75000, 80000] },
        rev2y: { lbl: ["Jul'23", "Oct", "Jan'24", "Apr", "Jul", "Oct", "Jan'25", "Apr", "Jun"], actual: [22000, 28000, 31000, 35000, 38000, 44000, 52000, 69000, 84320], target: [25000, 30000, 33000, 37000, 42000, 48000, 55000, 72000, 80000] },
        traffic: { lbl: ['Organic', 'Direct', 'Social', 'Email', 'Referral'], data: [42, 23, 18, 10, 7], colors: ['#6366f1', '#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6'] },
        visitors: { lbl: [...Array(30)].map((_, i) => i + 1 + ''), data: [1200, 1350, 1100, 1480, 1620, 1390, 1750, 1820, 1680, 1940, 2100, 1980, 2250, 2380, 2200, 2450, 2600, 2480, 2720, 2850, 2700, 2980, 3100, 2950, 3200, 3380, 3250, 3420, 3580, 3650] },
        device: { lbl: ['Desktop', 'Mobile', 'Tablet'], data: [54, 36, 10], colors: ['#6366f1', '#10b981', '#f59e0b'] },
        perf: { lbl: ['Home', 'Pricing', '/about', 'Dashboard', '/blog', 'Contact', 'Signup', 'Login', '/docs'], load: [1.2, .8, 1.5, 2.1, 1.8, .6, 1.1, .7, 2.8], sess: [8200, 4100, 3800, 6200, 3200, 1900, 5400, 7100, 2100] },
        cat: { lbl: ['Software', 'API', 'Consulting', 'Add-ons', 'Bundles', 'Support'], data: [42000, 18000, 12000, 8000, 5000, 3200], colors: ['#6366f1', '#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6', '#f43f5e'] },
        sp: { rev: [52, 61, 57, 73, 69, 84], usr: [98, 105, 102, 114, 118, 128], bnc: [31, 29, 28, 27, 26, 24], cnv: [3.1, 3.0, 3.2, 3.4, 3.6, 3.8] },
    },
};

/* ─── HELPERS ───────────────────────────── */
const $ = id => document.getElementById(id);
const chartMap = {};
function destroyChart(id) { if (chartMap[id]) { chartMap[id].destroy(); delete chartMap[id]; } }
function cssProp(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim() }

function baseOpts() {
    return {
        textMuted: cssProp('--text2'),
        border: cssProp('--border'),
        surface: cssProp('--surface'),
        tooltipBg: { backgroundColor: '#18202f', borderColor: cssProp('--border'), borderWidth: 1, padding: 13, cornerRadius: 10, titleFont: { size: 12, family: 'Inter' }, bodyFont: { size: 13, family: "'JetBrains Mono',monospace" } },
    };
}

/* ─── SPARKLINES ───────────────────────── */
function sparkline(id, data, color) {
    destroyChart(id);
    const ctx = $(id); if (!ctx) return;
    const g = ctx.getContext('2d').createLinearGradient(0, 0, 0, 38);
    g.addColorStop(0, color + '55'); g.addColorStop(1, color + '00');
    chartMap[id] = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: { labels: data.map((_, i) => i), datasets: [{ data, borderColor: color, borderWidth: 1.8, backgroundColor: g, fill: true, tension: .4, pointRadius: 0 }] },
        options: { responsive: false, animation: { duration: 1200, easing: 'easeOutQuart' }, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } } },
    });
}

/* ─── KPI COUNTER ───────────────────────── */
function counter(el, target, pre = '', suf = '', dec = 0, dur = 1400) {
    const t0 = Date.now();
    (function tick() {
        const p = Math.min((Date.now() - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 4);
        const v = target * e;
        el.textContent = pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suf;
        if (p < 1) requestAnimationFrame(tick);
    })();
}

/* ─── CHARTS ────────────────────────────── */
function gradV(id, color, alpha = .25) {
    const ctx = $(id); if (!ctx) return 'transparent';
    const g = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    g.addColorStop(0, color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
    g.addColorStop(1, color + '00'); return g;
}

function renderRev(range = '6m') {
    destroyChart('rev');
    const d = DB.charts[`rev${range}`];
    const o = baseOpts();
    chartMap.rev = new Chart($('revChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: d.lbl, datasets: [
                { label: 'Revenue', data: d.actual, borderColor: '#6366f1', borderWidth: 2.5, backgroundColor: gradV('revChart', '#6366f1'), fill: true, tension: .4, pointRadius: 4, pointBackgroundColor: '#6366f1', pointBorderColor: o.surface, pointBorderWidth: 2, pointHoverRadius: 7 },
                { label: 'Target', data: d.target, borderColor: '#10b981', borderWidth: 1.5, borderDash: [6, 4], backgroundColor: 'transparent', fill: false, tension: .4, pointRadius: 3, pointBackgroundColor: '#10b981', pointBorderColor: o.surface, pointBorderWidth: 2, pointHoverRadius: 5 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 900, easing: 'easeOutQuart' }, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { position: 'top', align: 'end', labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, padding: 16, font: { size: 12 } } }, tooltip: o.tooltipBg },
            scales: { x: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 12 } } }, y: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 11, family: "'JetBrains Mono',monospace" }, callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v) } } },
        },
    });
}

function renderDonut(id, lbl, data, colors, legId) {
    destroyChart(id);
    const o = baseOpts();
    chartMap[id] = new Chart($(id).getContext('2d'), {
        type: 'doughnut',
        data: { labels: lbl, datasets: [{ data, backgroundColor: colors, borderColor: o.surface, borderWidth: 3, hoverOffset: 10 }] },
        options: {
            responsive: true, maintainAspectRatio: false, cutout: '72%', animation: { duration: 900, easing: 'easeOutQuart' },
            plugins: { legend: { display: false }, tooltip: { ...o.tooltipBg, callbacks: { label: c => ` ${c.label}: ${c.parsed}%` } } },
        },
    });
    if (legId) {
        $(legId).innerHTML = lbl.map((l, i) => `<div class="leg-item"><span class="leg-dot" style="background:${colors[i]}"></span><span>${l}</span><span class="leg-val">${data[i]}%</span></div>`).join('');
    }
}

function renderVisitors() {
    destroyChart('vis'); const o = baseOpts(); const d = DB.charts.visitors;
    chartMap.vis = new Chart($('visChart').getContext('2d'), {
        type: 'bar',
        data: { labels: d.lbl, datasets: [{ label: 'Visitors', data: d.data, backgroundColor: d.data.map((_, i) => `rgba(99,102,241,${.2 + .6 * (i / d.data.length)})`), hoverBackgroundColor: '#6366f1', borderRadius: 4, borderSkipped: false }] },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 900, easing: 'easeOutQuart' },
            plugins: { legend: { display: false }, tooltip: { ...o.tooltipBg, callbacks: { label: c => ` Visitors: ${c.parsed.y.toLocaleString()}` } } },
            scales: { x: { grid: { display: false }, ticks: { color: o.textMuted, font: { size: 10 }, maxTicksLimit: 10 } }, y: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 11, family: "'JetBrains Mono',monospace" }, callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v } } },
        },
    });
}

function renderPerf() {
    destroyChart('perf'); const o = baseOpts(); const d = DB.charts.perf;
    chartMap.perf = new Chart($('perfChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: d.lbl, datasets: [
                { label: 'Sessions', data: d.sess, backgroundColor: 'rgba(14,165,233,.2)', borderColor: '#0ea5e9', borderWidth: 1.5, borderRadius: 4, yAxisID: 'y', order: 2 },
                { type: 'line', label: 'Load Time (s)', data: d.load, borderColor: '#f59e0b', backgroundColor: 'transparent', borderWidth: 2.5, pointRadius: 5, pointBackgroundColor: '#f59e0b', pointBorderColor: o.surface, pointBorderWidth: 2, tension: .4, yAxisID: 'y1', order: 1 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 900, easing: 'easeOutQuart' }, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { position: 'top', align: 'end', labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, padding: 14, font: { size: 12 } } }, tooltip: o.tooltipBg },
            scales: { x: { grid: { display: false }, ticks: { color: o.textMuted, font: { size: 11 } } }, y: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 11, family: "'JetBrains Mono',monospace" }, callback: v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v }, position: 'left' }, y1: { grid: { display: false }, ticks: { color: '#f59e0b', font: { size: 11, family: "'JetBrains Mono',monospace" }, callback: v => v + 's' }, position: 'right' } },
        },
    });
}

function renderCat() {
    destroyChart('cat'); const o = baseOpts(); const d = DB.charts.cat;
    chartMap.cat = new Chart($('catChart').getContext('2d'), {
        type: 'bar',
        data: { labels: d.lbl, datasets: [{ label: 'Revenue', data: d.data, backgroundColor: d.colors, borderRadius: 8, borderSkipped: false }] },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 900, easing: 'easeOutQuart' },
            plugins: { legend: { display: false }, tooltip: { ...o.tooltipBg, callbacks: { label: c => ` $${c.parsed.y.toLocaleString()}` } } },
            scales: { x: { grid: { display: false }, ticks: { color: o.textMuted, font: { size: 11 } } }, y: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 11, family: "'JetBrains Mono',monospace" }, callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v) } } },
        },
    });
}

function renderTrend() {
    destroyChart('trend'); const o = baseOpts(); const d = DB.charts.rev1y;
    chartMap.trend = new Chart($('trendChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: d.lbl, datasets: [
                { label: 'Revenue', data: d.actual, borderColor: '#6366f1', borderWidth: 2.5, backgroundColor: gradV('trendChart', '#6366f1', .2), fill: true, tension: .4, pointRadius: 3, pointBackgroundColor: '#6366f1', pointBorderColor: o.surface, pointBorderWidth: 2, pointHoverRadius: 6 },
                { label: 'Target', data: d.target, borderColor: '#10b981', borderWidth: 1.5, borderDash: [5, 4], backgroundColor: 'transparent', fill: false, tension: .4, pointRadius: 0 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, animation: { duration: 900, easing: 'easeOutQuart' }, interaction: { mode: 'index', intersect: false },
            plugins: { legend: { position: 'top', align: 'end', labels: { usePointStyle: true, pointStyle: 'circle', boxWidth: 7, padding: 14, font: { size: 11 } } }, tooltip: o.tooltipBg },
            scales: { x: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 10 } } }, y: { grid: { color: o.border }, ticks: { color: o.textMuted, font: { size: 10, family: "'JetBrains Mono',monospace" }, callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v) } } },
        },
    });
}

/* ─── RENDER LISTS ──────────────────────── */
function renderActivity() {
    $('actList').innerHTML = DB.activity.map(a => `
    <li class="act-item">
      <div class="act-ico" style="background:${a.bg}">${a.ico}</div>
      <div class="act-body">
        <div class="act-text">${a.txt}</div>
        <div class="act-time">${a.t}</div>
      </div>
    </li>`).join('');
}

function renderProducts() {
    $('prodList').innerHTML = DB.products.map((p, i) => `
    <li class="prod-item">
      <span class="prod-rank">${String(i + 1).padStart(2, '0')}</span>
      <div class="prod-info">
        <div class="prod-name">${p.name}</div>
        <div class="prod-cat">${p.cat}</div>
      </div>
      <div class="prod-meta">
        <div class="prod-rev">${p.rev}</div>
        <div class="bar-wrap"><div class="bar-fill" style="width:${p.pct}%"></div></div>
      </div>
    </li>`).join('');
}

function renderNotifs() {
    $('notifList').innerHTML = DB.notifs.map(n => `
    <li class="notif-item${n.unread ? ' unread' : ''}">
      <div class="nd"></div>
      <div>
        <div class="n-txt">${n.txt}</div>
        <div class="n-time">${n.time}</div>
      </div>
    </li>`).join('');
}

function renderStatBoxes() {
    $('statRow').innerHTML = DB.statBoxes.map((s, i) => `
    <div class="stat-box ${s.cls}" style="animation-delay:${i * .05 + .05}s">
      <div class="sl">${s.l}</div>
      <div class="sv" style="color:var(--${s.cls === 'g' ? 'emerald' : s.cls === 'b' ? 'sky' : s.cls === 'p' ? 'violet' : 'amber'})">${s.v}</div>
      <div class="sc ${s.up ? 'up' : 'dn'}">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="${s.up ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}"/></svg>
        ${s.ch}
      </div>
    </div>`).join('');
}

function renderReports() {
    $('repGrid').innerHTML = DB.reports.map((r, i) => `
    <div class="rep-card" style="animation-delay:${i * .05}s">
      <div class="rep-ico" style="background:${r.ibg}">${r.ico}</div>
      <div>
        <div class="rep-title">${r.title}</div>
        <div class="rep-desc">${r.desc}</div>
      </div>
      <div class="rep-footer">
        <span class="rep-meta">${r.dt} · ${r.sz}</span>
        <button class="dl-btn" onclick="toast('📥 Downloading ${r.title}…')">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download
        </button>
      </div>
    </div>`).join('');
}

/* ─── USERS TABLE ───────────────────────── */
const US = { page: 1, per: 6, search: '', role: '', status: '' };
function filtU() {
    return DB.users.filter(u => {
        const q = US.search.toLowerCase();
        return (!q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
            && (!US.role || u.role === US.role)
            && (!US.status || u.status === US.status);
    });
}
function renderUsers() {
    const all = filtU(); const total = all.length;
    const pages = Math.max(1, Math.ceil(total / US.per));
    if (US.page > pages) US.page = pages;
    const s = (US.page - 1) * US.per;
    const sl = all.slice(s, s + US.per);

    $('tblInfo').textContent = total === 0 ? 'No results' : `Showing ${s + 1}–${Math.min(s + US.per, total)} of ${total} users`;

    $('usersBody').innerHTML = sl.length === 0 ? `<tr><td colspan="6" style="text-align:center;padding:44px;color:var(--text2)">No users match your filters.</td></tr>` : sl.map(u => `
    <tr>
      <td>
        <div class="u-cell">
          <div class="u-av" style="background:${u.c}">${u.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
          <div>
            <div class="u-name">${u.name}</div>
            <div class="u-email-sub">${u.email}</div>
          </div>
        </div>
      </td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12.5px">${u.email}</td>
      <td><span class="role-badge ${u.role.toLowerCase()}">${u.role}</span></td>
      <td><span class="badge ${u.status.toLowerCase()}">${u.status}</span></td>
      <td style="font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text2)">${u.joined}</td>
      <td>
        <div class="act-btns">
          <button class="act-btn" title="Edit" onclick="editUser(${u.id})">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="act-btn del" title="Delete" onclick="delUser(${u.id})">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>`).join('');

    /* Pagination */
    let pg = `<button class="pg-btn" onclick="goPage(${US.page - 1})" ${US.page === 1 ? 'disabled' : ''}>‹</button>`;
    for (let i = 1; i <= pages; i++) {
        if (pages > 7 && i > 2 && i < pages - 1 && Math.abs(i - US.page) > 1) { if (i === 3 || i === pages - 2) pg += `<button class="pg-btn" disabled>…</button>`; continue; }
        pg += `<button class="pg-btn${i === US.page ? ' active' : ''}" onclick="goPage(${i})">${i}</button>`;
    }
    pg += `<button class="pg-btn" onclick="goPage(${US.page + 1})" ${US.page === pages ? 'disabled' : ''}>›</button>`;
    $('pagEl').innerHTML = pg;
}
function goPage(n) { US.page = n; renderUsers(); }
function editUser(id) { const u = DB.users.find(x => x.id === id); if (u) toast(`✏️ Editing ${u.name} — coming soon`); }
function delUser(id) { const i = DB.users.findIndex(x => x.id === id); if (i > -1) { const n = DB.users[i].name; DB.users.splice(i, 1); renderUsers(); toast(`🗑️ ${n} removed`); } }

/* ─── NAVIGATION ────────────────────────── */
const loaded = {};
function navigate(page) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === `page-${page}`));
    if (window.innerWidth <= 768) closeSidebar();
    if (loaded[page]) return; loaded[page] = true;

    if (page === 'dashboard') { renderRev('6m'); renderDonut('trafficChart', DB.charts.traffic.lbl, DB.charts.traffic.data, DB.charts.traffic.colors, 'trafficLeg'); }
    if (page === 'analytics') { renderVisitors(); renderDonut('devChart', DB.charts.device.lbl, DB.charts.device.data, DB.charts.device.colors, 'devLeg'); renderPerf(); }
    if (page === 'revenue') { renderCat(); renderTrend(); renderStatBoxes(); }
    if (page === 'users') renderUsers();
    if (page === 'reports') renderReports();
}

/* ─── THEME ─────────────────────────────── */
function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('nxb-theme', t);
}
function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    /* re-render active page charts */
    const pg = document.querySelector('.nav-item.active')?.dataset.page || 'dashboard';
    delete loaded[pg]; navigate(pg);
    toast(`${next === 'light' ? '☀️' : '🌙'} Switched to ${next} mode`);
}

/* ─── SIDEBAR (mobile) ──────────────────── */
function openSidebar() { $('sidebar').classList.add('open'); $('ham').classList.add('open'); $('overlay').classList.add('show'); }
function closeSidebar() { $('sidebar').classList.remove('open'); $('ham').classList.remove('open'); $('overlay').classList.remove('show'); }

/* ─── TOAST ─────────────────────────────── */
let _tt;
function toast(msg, dur = 2800) {
    const el = $('toastEl'); $('toastMsg').textContent = msg;
    el.classList.remove('out', 'in'); void el.offsetWidth;
    el.classList.add('in'); clearTimeout(_tt);
    _tt = setTimeout(() => { el.classList.remove('in'); el.classList.add('out'); }, dur);
}

/* ─── CLOCK ─────────────────────────────── */
function startClock() {
    const el = $('clock');
    (function tick() { el.textContent = new Date().toLocaleString('en-PK', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); })();
    setInterval(() => $('clock').textContent = new Date().toLocaleString('en-PK', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }), 1000);
}

/* ─── NAV RIPPLE ────────────────────────── */
function addRipple(el, e) {
    const r = document.createElement('span'); r.className = 'ripple';
    const rect = el.getBoundingClientRect(); const s = Math.max(rect.width, rect.height);
    r.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - rect.left - s / 2}px;top:${e.clientY - rect.top - s / 2}px`;
    el.appendChild(r); setTimeout(() => r.remove(), 500);
}

/* ─── INIT ──────────────────────────────── */
(function () {
    /* theme */
    applyTheme(localStorage.getItem('nxb-theme') || 'dark');
    /* clock */
    startClock();
    /* static lists */
    renderActivity(); renderProducts(); renderNotifs();
    /* initial page */
    navigate('dashboard');
    /* KPI counters + sparklines */
    setTimeout(() => {
        counter($('kv1'), 84320, '$', '', 0);
        counter($('kv2'), 12847, '', '', 0);
        counter($('kv3'), 24.3, '', '%', 1);
        counter($('kv4'), 3.8, '', '%', 1);
        sparkline('sp1', DB.charts.sp.rev, '#10b981');
        sparkline('sp2', DB.charts.sp.usr, '#0ea5e9');
        sparkline('sp3', DB.charts.sp.bnc, '#f59e0b');
        sparkline('sp4', DB.charts.sp.cnv, '#8b5cf6');
    }, 200);

    /* nav clicks */
    document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', e => { addRipple(el, e); navigate(el.dataset.page); });
    });

    /* theme toggle */
    $('themeBtn').addEventListener('click', toggleTheme);

    /* hamburger */
    $('ham').addEventListener('click', () => $('sidebar').classList.contains('open') ? closeSidebar() : openSidebar());
    $('overlay').addEventListener('click', closeSidebar);

    /* range chips */
    document.querySelectorAll('[data-range]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-range]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active'); renderRev(btn.dataset.range);
        });
    });

    /* notification panel */
    $('notifBtn').addEventListener('click', e => { e.stopPropagation(); $('notifPanel').classList.toggle('open'); });
    document.addEventListener('click', e => { if (!$('notifPanel').contains(e.target) && e.target !== $('notifBtn')) $('notifPanel').classList.remove('open'); });
    $('clearNotif').addEventListener('click', () => {
        $('notifList').innerHTML = '<li style="padding:28px;text-align:center;color:var(--text2);font-size:13px">✅ All caught up!</li>';
        $('nBadge').style.display = 'none';
        toast('✅ All notifications cleared');
        $('notifPanel').classList.remove('open');
    });

    /* refresh */
    $('refreshBtn').addEventListener('click', () => {
        const svg = $('refreshIco');
        svg.style.animation = 'spin .8s linear';
        svg.addEventListener('animationend', () => svg.style.animation = '', { once: true });
        const pg = document.querySelector('.nav-item.active')?.dataset.page || 'dashboard';
        delete loaded[pg]; navigate(pg);
        toast('🔄 Data refreshed successfully');
    });

    /* global search */
    $('globalSearch').addEventListener('input', e => {
        const q = e.target.value.trim(); if (!q) return;
        const hit = DB.users.find(u => u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase()));
        if (hit) { navigate('users'); US.search = q; US.page = 1; renderUsers(); }
    });
    $('globalSearch').addEventListener('keydown', e => { if (e.key === 'Escape') { e.target.value = ''; US.search = ''; renderUsers(); } });

    /* user table filters */
    $('userSearch').addEventListener('input', e => { US.search = e.target.value; US.page = 1; renderUsers(); });
    $('roleFilter').addEventListener('change', e => { US.role = e.target.value; US.page = 1; renderUsers(); });
    $('statusFilter').addEventListener('change', e => { US.status = e.target.value; US.page = 1; renderUsers(); });

    /* table column sort */
    document.querySelectorAll('thead th[data-col]').forEach(th => {
        th.addEventListener('click', () => {
            const col = th.dataset.col;
            document.querySelectorAll('thead th').forEach(t => { t.classList.remove('asc', 'desc'); });
            const asc = !th.classList.contains('asc');
            th.classList.toggle('asc', asc); th.classList.toggle('desc', !asc);
            DB.users.sort((a, b) => asc ? String(a[col]).localeCompare(String(b[col])) : String(b[col]).localeCompare(String(a[col])));
            renderUsers();
        });
    });

    /* brand logo spin on click */
    $('brandLogo').addEventListener('click', () => toast('🎯 NexaBoard v2.1 — SoftGrowTech Internship Project'));
})();
