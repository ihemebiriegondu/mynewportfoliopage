export function cleanStringList(list) {
  return (list || []).map((item) => item?.trim?.() || '').filter(Boolean);
}

export function cleanSocialLinks(links) {
  return (links || []).filter((link) => link?.url?.trim());
}

export function cleanTimeline(items) {
  return (items || []).filter(
    (item) => item?.title?.trim() || item?.subTitle?.trim() || item?.text?.trim()
  );
}
