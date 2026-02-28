"use client";

/* ------------------------------------------------------------------ */
/*  共通レイアウトコンポーネント                                         */
/* ------------------------------------------------------------------ */
function Section({
  children,
  bg = "white",
  id,
}: {
  children: React.ReactNode;
  bg?: "white" | "gray";
  id?: string;
}) {
  const cls = bg === "gray" ? "bg-[#f5f6f8]" : "bg-white";
  return (
    <section id={id} className={`py-20 md:py-28 ${cls}`}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">{children}</div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] md:text-[28px] font-bold mb-12 text-center leading-snug">
      {children}
    </h2>
  );
}

function FeatureCard({
  title,
  desc,
  accent = "#2a5298",
}: {
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 border-l-[3px]"
      style={{ borderLeftColor: accent }}
    >
      <h3 className="text-[16px] md:text-[17px] font-bold mb-2 text-[#1a2744]">
        {title}
      </h3>
      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#555]">
        {desc}
      </p>
    </div>
  );
}

/* ================================================================== */
/*  メインページ                                                       */
/* ================================================================== */
export default function Home() {
  return (
    <main className="text-[#1a2744]">
      {/* ============================================================ */}
      {/*  ヒーローセクション                                           */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden px-5 py-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #0d1b3e 0%, #1a3a6b 40%, #2a5298 100%)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <p className="text-xs md:text-sm font-bold tracking-[.25em] text-yellow-300/90 mb-4">
            全国個人タクシー法令試験研究所 監修
          </p>
          <p className="inline-block text-[11px] md:text-sm font-bold tracking-widest bg-white/10 border border-white/20 rounded-full px-5 py-1.5 mb-6">
            2026年7月試験対応版 — まもなくリリース
          </p>

          <h1
            className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-snug md:leading-tight mb-6"
            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.4)" }}
          >
            全受験生待望の
            <br />
            個人タクシー法令試験
            <br />
            <span className="text-yellow-300">完全対策プログラム</span>
          </h1>

          <p className="text-sm md:text-base text-white/70 mb-12">
            無料で、すべての機能をご利用いただけます。
          </p>

          {/* ── CONCEPT ── */}
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="relative bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl px-6 md:px-10 py-8 md:py-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1a2744] text-[10px] md:text-xs font-black tracking-widest px-4 py-1 rounded-full">
                CONCEPT
              </div>
              <p className="text-[17px] sm:text-xl md:text-2xl font-bold leading-relaxed md:leading-relaxed">
                軍師である<span className="text-yellow-300">高度分析プログラム</span>が、
                <br className="hidden sm:inline" />
                あなたの完全合格ルートを、
                <br />
                <span className="text-yellow-300">あなた専用に毎日設計する。</span>
              </p>
            </div>
          </div>

          {/* ── 分析エンジン補足 ── */}
          <div className="max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="text-[13px] sm:text-[15px] md:text-[17px] leading-[2] md:leading-[2.2] text-white/85 space-y-4 text-center">
              <p>
                語群選択にいつ手をつけるかも、
                <br className="hidden md:inline" />
                ○×の仕上がりと残り日数を見て<strong className="text-white">アプリが判断する。</strong>
              </p>
              <p>
                <strong className="text-white text-base md:text-lg">何を勉強するか迷う時間は、もう必要ない。</strong>
              </p>
            </div>
          </div>

          {/* ── CTA ── */}
          <div>
            <button
              disabled
              className="inline-block bg-white/40 text-white/70 text-lg md:text-xl font-bold px-10 md:px-14 py-4 md:py-5 rounded-xl cursor-not-allowed"
            >
              無料で始める
            </button>
            <div className="mt-5 inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-5 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
              </span>
              <span className="text-sm md:text-base font-bold text-yellow-300">
                2026年3月10日 リリース予定
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES — 5つの特徴                                         */}
      {/* ============================================================ */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, #0f1d38 0%, #162d55 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="h-px w-8 bg-white/30" />
            <span className="text-[11px] md:text-xs font-bold tracking-[.2em] text-white/60">FEATURES</span>
            <div className="h-px w-8 bg-white/30" />
          </div>

          <div className="grid gap-4 md:gap-5">
            {/* 間違いの質を分析 */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-blue-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🔬
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">間違いの&ldquo;質&rdquo;を分析する</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    不正解を<strong className="text-white">「引っかけミス」と「理解不足」に分類</strong>して記録。
                    他ユーザーの平均正答率と照合し、「みんなも間違える難問」か「自分だけ間違える基礎問題」かを判別。
                    <strong className="text-white">間違え方が違えば、対策も違う。</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* 語群選択オール選択肢方式 */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-400/30 to-purple-600/30 border border-purple-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🎯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">語群選択｜オール選択肢方式</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    本番の10個ではない。その条文で過去に出題された選択肢すべて、<strong className="text-white">30〜40個から解答。</strong>
                    「処置」と「措置」、「事由」と「理由」——一文字違いが並ぶ中で正解を選べるか。
                    <strong className="text-white">消去法が通用しない環境で鍛えるから、本番の10個が楽になる。</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* 曖昧問題 */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 border border-amber-400/20 flex items-center justify-center text-xl md:text-2xl">
                  📖
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">曖昧問題｜根拠付き解答徹底解説</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    条文を読んでも答えが割れる問題。他の問題集では「解説なし」「回答不能」「根拠のない別解答」。
                    このアプリは、<strong className="text-white">「出題者がどちらの答えを想定しているのか？」その思考ロジックと根拠まで徹底解剖</strong>して解説する。
                  </p>
                </div>
              </div>
            </div>

            {/* カード4・5 横並び */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {/* ランキング */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 border border-emerald-400/20 flex items-center justify-center text-xl md:text-2xl">
                    🏆
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">全国ランキング × 合格判定</h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                      模擬試験で全国の受験者と順位を競い、合格可能性を<strong className="text-white">SSS〜Fの9段階でリアルタイム判定。</strong>
                      他の受験者の進捗やランクバッジも見えるから、「自分だけ遅れているのか」が数字でわかる。
                    </p>
                  </div>
                </div>
              </div>

              {/* 音声学習 */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-rose-400/30 to-rose-600/30 border border-rose-400/20 flex items-center justify-center text-xl md:text-2xl">
                    🎧
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold text-white mb-2">乗務中も、勉強時間にする</h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                      音声学習モードで問題文→思考時間→正解→解説を自動読み上げ。
                      <strong className="text-white">ハンドルを握りながら、1日の隙間時間すべてが学習に変わる。</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  主な機能一覧                                                 */}
      {/* ============================================================ */}
      <Section bg="gray" id="features">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-10 bg-[#2a5298]/30" />
          <span className="text-[11px] md:text-xs font-bold tracking-[.2em] text-[#2a5298]/60">ALL FEATURES</span>
          <div className="h-px w-10 bg-[#2a5298]/30" />
        </div>
        <SectionHeading>
          搭載機能
        </SectionHeading>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          <FeatureCard
            title="高度分析最適化モード"
            desc="進捗率・正答率・試験までの残り日数を独自のアルゴリズムで分析し、今日やるべき学習パターンを複数提案。「何をどの順番で解くか」を自分で考える必要はありません。"
            accent="#2a5298"
          />
          <FeatureCard
            title="模擬試験"
            desc="本番と同じ構成（○×40問＋語群1題＝45点満点）・同じ制限時間で実施。ジャンル別の採点内訳で弱点が一目瞭然。ハードモード・レジェンドモードも搭載しています。"
            accent="#7c3aed"
          />
          <FeatureCard
            title="通常学習モード（○×・語群）"
            desc="ジャンル・難易度・問題数を自由に組み合わせて出題。完全ランダムだから「ページ順で答えを覚える」リスクはゼロ。解答直後に正解・解説・条文がその場で表示されます。"
            accent="#059669"
          />
          <FeatureCard
            title="音声学習モード"
            desc="問題文→思考時間→正解→解説を自動読み上げ。乗務中・通勤中の「ながら学習」で、1日の隙間時間すべてが勉強時間に変わります。語群の条文読み上げにも対応。"
            accent="#e11d48"
          />
          <FeatureCard
            title="復習機能（間違えた問題の自動抽出）"
            desc="間違えた問題をワンタップで再出題。間違えた瞬間に自動記録されるため、自分でチェックし直す手間はゼロ。解説・条文・メモもセットで復習できます。"
            accent="#d97706"
          />
          <FeatureCard
            title="学習状況ダッシュボード"
            desc="ジャンル別・問題種別ごとの進捗率と正答率をグラフで可視化。先週比の上昇・下降も一目でわかり、合格までに何が足りないかが常に数値で明確です。"
            accent="#2a5298"
          />
          <FeatureCard
            title="レーダーチャート＋統計分析"
            desc="全ジャンルの進捗率・正答率を他ユーザー平均と重ねたレーダーチャートで表示。自分だけでは気づけない「相対的な弱点」が浮かび上がります。"
            accent="#7c3aed"
          />
          <FeatureCard
            title="ランキング機能（TOP30）"
            desc="地域別×モード別で全国の受験者と競えます。ランクインや自己最高記録更新時にはお祝いポップアップも。孤独な勉強に「負けたくない」という熱を注入します。"
            accent="#059669"
          />
          <FeatureCard
            title="条文全文ワンタップ表示"
            desc="解説画面からワンタップで該当条文の全文を展開。問題→解説→条文原文が1画面で完結し、「なぜこの答えなのか」を根拠レベルで理解できます。"
            accent="#e11d48"
          />
          <FeatureCard
            title="合格判定ランク（SSS〜F）"
            desc="進捗と残り日数から合格可能性をSSS〜Fの9段階で判定。「このペースで間に合うのか」が常に数値で確認でき、学習計画の見直しに役立ちます。"
            accent="#d97706"
          />
          <FeatureCard
            title="誤答理由の記録と絞り込み"
            desc="不正解時に「引っかけミス」か「理解不足」かを記録。理由ごとに絞り込み出題できるため、間違いの質に踏み込んだ学習で弱点を正確に潰せます。"
            accent="#2a5298"
          />
          <FeatureCard
            title="他ユーザー平均正答率＋自動難易度判定"
            desc="各問題に他ユーザーの平均正答率を表示。「みんなも間違える難問」か「自分だけ間違える基礎問題」かが一目瞭然。難易度は★☆☆〜★★★で自動分類されます。"
            accent="#7c3aed"
          />
          <FeatureCard
            title="関連問題の優先出題"
            desc="紛らわしい条文の違いを集中的に比較学習。混同しやすい問題をまとめて出題し、「なんとなくの理解」を「明確な区別」に変えます。"
            accent="#059669"
          />
          <FeatureCard
            title="模擬試験カスタマイズ"
            desc="○×の問題数・語群の選択肢数・制限時間を自由に変更可能。自分だけのトレーニングメニューを組めます。"
            accent="#e11d48"
          />
          <FeatureCard
            title="3地域完全対応"
            desc="特定指定・指定・一般の全3地域に対応し、地域ごとの出題構成（問題数・選択肢数・合格ライン・制限時間）を完全再現。設定を切り替えるだけで全地域の学習・模試が可能です。"
            accent="#d97706"
          />
        </div>
      </Section>

      {/* ============================================================ */}
      {/*  CTA セクション                                               */}
      {/* ============================================================ */}
      <section
        className="py-20 md:py-28 px-5"
        style={{
          background:
            "linear-gradient(160deg, #0d1b3e 0%, #1a3a6b 40%, #2a5298 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-[22px] md:text-[28px] font-bold mb-6 leading-snug">
            2026年7月試験対応
            <br />
            個人タクシー法令試験完全対策プログラム
          </h2>
          <p className="text-[15px] md:text-[17px] leading-relaxed text-white/80 mb-10">
            すべての機能を無料でご利用いただけます。
            <br />
            アカウント登録後、すぐに学習を始められます。
          </p>

          <div>
            <button
              disabled
              className="inline-block bg-white/40 text-white/70 text-lg md:text-xl font-bold px-10 md:px-14 py-4 md:py-5 rounded-xl cursor-not-allowed"
            >
              無料で新規登録する
            </button>
            <div className="mt-5 inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-5 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400" />
              </span>
              <span className="text-sm md:text-base font-bold text-yellow-300">
                2026年3月10日 リリース予定
              </span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-xs md:text-sm font-bold tracking-widest text-white/70">
              全国個人タクシー法令試験研究所 監修
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
