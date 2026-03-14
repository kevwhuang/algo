// 1242 - Web Crawler Multithreaded

class Solution {
    private Set<String> set;
    private String host;
    private HtmlParser htmlParser;
    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        set = ConcurrentHashMap.newKeySet();
        host = getHost(startUrl);
        this.htmlParser = htmlParser;
        crawler(startUrl);
        return new ArrayList<> (set);
    }
    private void crawler(String startUrl) {
        if (set.contains(startUrl)) return;
        if (!getHost(startUrl).equals(host)) return;
        set.add(startUrl);
        htmlParser.getUrls(startUrl).parallelStream().forEach(this::crawler);
    }
    private static String getHost(String url) {
        int end = url.indexOf('/', 7);
        return url.substring(7, end == -1 ? url.length() : end);
    }
}
