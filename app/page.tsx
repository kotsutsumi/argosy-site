export default function HomePage() {
  return (
    <>
      <header className="hero">
        <h1>Argosy</h1>
        <p className="tagline">暮らしの道具ログ — 生活家電・便利グッズを、実用目線で。</p>
        <p className="tagline-sub">
          An in-house content publishing and analytics platform for product-introduction media.
        </p>
      </header>
      <main>
        <section>
          <h2>Argosyについて</h2>
          <p>
            Argosyは、生活家電・便利グッズの「買って後悔しない選び方」を紹介するメディアと、
            それを支える自社運用のコンテンツ制作・投稿・効果測定プラットフォームです。
            ショート動画・画像・テキスト投稿を制作し、<strong>自らが運営するソーシャルメディアアカウント</strong>
            へ投稿して、その反応を計測しています。
          </p>
          <p className="sub">
            Argosy is a self-hosted software platform that plans, creates, and publishes
            product-introduction content to social media accounts operated by the Argosy team
            itself, and measures how that content performs.
          </p>
        </section>

        <section>
          <h2>プラットフォームAPIの利用について</h2>
          <ul>
            <li>
              <strong>投稿:</strong> 自社アカウントへのコンテンツ投稿のみに使用します。
            </li>
            <li>
              <strong>管理:</strong> 自社投稿の更新・削除に使用します。
            </li>
            <li>
              <strong>分析:</strong> 自社投稿のエンゲージメント指標の取得に使用します。
            </li>
            <li>
              <strong>低頻度運用:</strong> 投稿は1日数件までとし、公開前に人間が内容を確認します。
            </li>
          </ul>
          <h3>行わないこと</h3>
          <ul>
            <li>他ユーザーのデータの収集・スクレイピング・分析</li>
            <li>APIデータの転売・第三者提供</li>
            <li>自動での大量エンゲージメント(いいね・フォロー・コメント)</li>
          </ul>
        </section>

        <section>
          <h2>アフィリエイト開示</h2>
          <p>
            Argosyが発信するコンテンツには、アフィリエイトリンク(Amazonアソシエイト等)を含む場合があります。
            該当する投稿には必ず開示文を明記しています。リンクから商品が購入された場合、
            当プロジェクトが紹介料を得ることがあります。価格・在庫・仕様は、必ずリンク先の商品ページでご確認ください。
          </p>
          <p className="sub">
            Some content published by Argosy contains affiliate links (for example, links to
            Amazon product pages as an Amazon Associate). Every such post carries a clear
            affiliate disclosure.
          </p>
        </section>

        <section>
          <h2>プライバシー</h2>
          <p>
            Argosyは自社アカウントのコンテンツと統計情報のみを扱い、訪問者や他ユーザーの個人情報を収集しません。
            Argosyが管理するリンクのクリック統計は集計値のみで、個人を特定できる情報は含みません。
          </p>
        </section>

        <section>
          <h2>お問い合わせ</h2>
          <p>
            運営: Argosy project (Kazuhiro Kotsutsumi)
            <br />
            Email: <code>kotsutsumi.argosy@gmail.com</code>
            <br />
            GitHub: <a href="https://github.com/kotsutsumi">github.com/kotsutsumi</a>
          </p>
        </section>
      </main>
      <footer>© 2026 Argosy Project</footer>
    </>
  );
}
