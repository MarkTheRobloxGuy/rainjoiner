// ==UserScript==
// @name         BloxFlip Rain Joiner | discord.gg/predictors
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto joins rain on BloxFlip
// @author       Blox-Predictor 
// @match        *://*.bloxflip.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Update chat header link
    setInterval(() => {
        const headerEl = document.querySelector('span[class*="chatHeaderOnline"]');
        if (headerEl && !headerEl.dataset.modifiedByPredictor) {
            headerEl.dataset.modifiedByPredictor = 'true';
            headerEl.innerHTML = `<a href="https://discord.gg/predictors" target="_blank" style="color: inherit; text-decoration: none;">RAIN JOINER BY BLOX-PREDICTOR</a>`;
        }
        const titleEl = document.querySelector('[class*="chatHeaderTitle"]');
        if (titleEl) {
            titleEl.remove();
        }
    }, 1000);

    setInterval(() => {
        try {
            const banners = document.querySelectorAll('div[class*="chatBanner"]');
            const banner = Array.from(banners).find(el => (el.innerText || '').toLowerCase().includes('rain'));
            if (banner) {
                const joinEl = banner.querySelector('p[class*="chatBannerJoinButton"]') || banner.querySelector('[class*="chatBannerJoinButton"]');
                if (joinEl && !joinEl.innerText.trim().toLowerCase().includes('joined')) {
                    const tryReactClick = (el) => {
                        if (!el) return false;
                        const rk = Object.keys(el).find(k => k.startsWith('__reactProps$') || k.startsWith('__reactEventHandlers$'));
                        if (rk && el[rk] && typeof el[rk].onClick === 'function') {
                            el[rk].onClick({ bubbles: true, cancelable: true, preventDefault: () => { }, stopPropagation: () => { } });
                            return true;
                        }
                        return false;
                    };
                    let clicked = tryReactClick(joinEl);
                    if (!clicked) {
                        let walk = joinEl.parentElement;
                        while (walk && walk !== document.body && !clicked) {
                            clicked = tryReactClick(walk);
                            walk = walk.parentElement;
                        }
                    }
                    if (!clicked) {
                        let walk = joinEl;
                        while (walk && walk !== document.body && !clicked) {
                            const fiberKey = Object.keys(walk).find(k => k.startsWith('__reactFiber$'));
                            if (fiberKey) {
                                let fiber = walk[fiberKey];
                                let depth = 0;
                                while (fiber && depth < 15) {
                                    if (fiber.memoizedProps && typeof fiber.memoizedProps.onClick === 'function') {
                                        fiber.memoizedProps.onClick({ bubbles: true, cancelable: true, preventDefault: () => { }, stopPropagation: () => { } });
                                        clicked = true;
                                        break;
                                    }
                                    fiber = fiber.return;
                                    depth++;
                                }
                            }
                            walk = walk.parentElement;
                        }
                    }
                    if (!clicked) {
                        ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(ev => {
                            joinEl.dispatchEvent(new MouseEvent(ev, { bubbles: true, cancelable: true, view: window }));
                        });
                        ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(ev => {
                            banner.dispatchEvent(new MouseEvent(ev, { bubbles: true, cancelable: true, view: window }));
                        });
                    }
                }
            }
        } catch (e) { }
    }, 1000);
})();
