# frozen_string_literal: true

source "https://rubygems.org"

# 指定 Jekyll 版本
gem "jekyll", "~> 4.3.0"
gem "jekyll-theme-chirpy"

# 安装 Jekyll 主题依赖
gem "jekyll-seo-tag"          # SEO 标签
gem "jekyll-paginate"         # 分页功能
gem "jekyll-sitemap"          # 网站地图
gem "jekyll-archives"         # 支持类别和标签页面
gem "jekyll-include-cache"    # 缓存 includes 提高性能
gem "jekyll-redirect-from"    # 重定向插件

# 其他插件
group :test do
  gem "html-proofer", "~> 4.4" # 用于验证网站链接等
end

# Windows 和 JRuby 特定的配置
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows 平台上用于性能提升的 gem
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]

# 锁定 `http_parser.rb` 版本在 JRuby 上
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]

# Linux-musl 平台上的 sass 转换器锁定版本
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end

# 播放器插件
gem "jekyll-react-player" # 安装用于博客中的播放器插件
