// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.theworkoutwarehousebybrandi.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.theworkoutwarehousebybrandi.com/","title_tag":"Women’s fitness Rapid City | The Workout Warehouse by Brandi","meta_description":"Women’s fitness Rapid City in a boutique fitness studio with an empowering fitness community. Join our fitness classes and enjoy a supportive fitness environment."},{"page_url":"https://www.theworkoutwarehousebybrandi.com/gift-card","title_tag":"Join our fitness classes Rapid City | The W.W. by Brandi","meta_description":"Give the gift of health and wellness Rapid City. Support her fitness journey at a boutique fitness studio and empowering fitness community with flexible eGift card options."}],"keywords":["Women's fitness Rapid City","Group classes Rapid City","Fitness journey Rapid City","Bungee fitness Rapid City","Pilates Reformer Rapid City","Boutique fitness studio","Empowering fitness community","Health and wellness Rapid City","Supportive fitness environment","Join our fitness classes"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": "https://www.theworkoutwarehousebybrandi.com/#exercise-gym",
  "name": "The Workout Warehouse & Bungee Fitness By Brandi",
  "url": "https://www.theworkoutwarehousebybrandi.com/",
  "description": "The Workout Warehouse by Brandi is an all-women group fitness boutique studio in Rapid City, SD, offering Bungee Fit, Pilates Reformer, TRX and over 15 different group fitness classes in a supportive, judgment-free environment.",
  "slogan": "Together We Stand Motivated and Stronger",
  "image": "https://static.wixstatic.com/media/bc26df_f0b0167fe63f47f8873e1e30c32661a9%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/bc26df_f0b0167fe63f47f8873e1e30c32661a9%7Emv2.png",
  "logo": "https://static.wixstatic.com/media/bc26df_f0b0167fe63f47f8873e1e30c32661a9%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/bc26df_f0b0167fe63f47f8873e1e30c32661a9%7Emv2.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2020 Deadwood Ave Unit 102",
    "addressLocality": "Rapid City",
    "addressRegion": "SD",
    "postalCode": "57701",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Rapid City"
  },
  "telephone": "+1-605-430-8927",
  "email": "222Brandi@gmail.com",
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.youtube.com",
    "https://twitter.com"
  ],
  "founder": {
    "@type": "Person",
    "name": "Brandi",
    "jobTitle": "Coach",
    "telephone": "+1-605-430-8927"
  },
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "All Women Group Fitness Classes",
      "description": "All-women group fitness boutique studio offering Bungee Fit, Pilates Reformer, TRX and over 15 different group fitness classes for all levels.",
      "url": "https://www.theworkoutwarehousebybrandi.com/",
      "category": "FitnessClass"
    },
    {
      "@type": "Offer",
      "name": "eGift Card",
      "description": "Digital gift card for The Workout Warehouse by Brandi. Choose an amount and include a personalized message.",
      "url": "https://www.theworkoutwarehousebybrandi.com/gift-card",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "minValue": 1
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Joining The W.W by B was the best decision I made for my fitness journey. I feel stronger and more confident than ever!",
      "author": {
        "@type": "Person",
        "name": "Kathleen"
      },
      "datePublished": "2024-07-01"
    },
    {
      "@type": "Review",
      "reviewBody": "The supportive atmosphere at The Workout Warehouse by Brandi helped me achieve my fitness goals. I'm so grateful for the amazing instructors and the positive energy in every class.",
      "author": {
        "@type": "Person",
        "name": "Michele"
      },
      "datePublished": "2023-02-10"
    },
    {
      "@type": "Review",
      "reviewBody": "The W.W. by B has transformed my approach to fitness. I never thought working out could be this much fun and rewarding!",
      "author": {
        "@type": "Person",
        "name": "Amanda"
      },
      "datePublished": "2023-03-10"
    }
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "name": "Book a Class",
      "target": "https://www.mindbodyonline.com/",
      "result": {
        "@type": "EventReservation",
        "name": "Group Fitness Class Reservation"
      }
    },
    {
      "@type": "BuyAction",
      "name": "Buy eGift Card",
      "target": "https://www.theworkoutwarehousebybrandi.com/gift-card"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
