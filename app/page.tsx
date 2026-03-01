"use client";

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

          {/* ── 2026年7月試験対応版バッジ ── */}
          <div className="mb-5">
            <span
              className="inline-block text-lg sm:text-xl md:text-2xl font-black tracking-wider px-6 md:px-8 py-2.5 md:py-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
                color: "#fff",
                boxShadow: "0 0 24px rgba(245,158,11,0.45)",
              }}
            >
              2026年7月試験対応版
            </span>
          </div>

          {/* ── エリア対応 ── */}
          <div className="mb-8">
            <div
              className="inline-block rounded-xl px-5 md:px-8 py-3 md:py-4 border-2"
              style={{
                borderColor: "rgba(96,165,250,0.5)",
                background: "rgba(96,165,250,0.1)",
              }}
            >
              <p className="text-[13px] sm:text-base md:text-lg font-bold leading-relaxed text-white">
                <span className="text-sky-300">関東運輸支局</span>
                <span className="text-white/60 mx-1">｜</span>
                東京特別区・武三交通圏
                <span className="text-white/40">／</span>
                神奈川京浜交通圏
                <span className="text-white/40">／</span>
                関東その他の交通圏
              </p>
              <p className="text-base sm:text-lg md:text-xl font-black tracking-widest mt-1.5"
                style={{ color: "#facc15" }}
              >
                全エリア対応
              </p>
            </div>
          </div>

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
                あなたの完全合格ルートを、
                <br />
                <span className="text-yellow-300">あなた専用に毎日設計する。</span>
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
      {/*  FEATURES — 特徴                                              */}
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

            {/* ── 🎯 あなた専用の最適学習プランを毎日提案 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-blue-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🎯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">あなた専用の最適学習プランを毎日提案</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    全過去問（及び過去問ベース問題）の中から、今のあなたに最も効果のある問題を自動で選びます。<strong className="text-white">「次に何を勉強すべきか」を迷う時間がゼロになります。</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* ── 💡 あなたの成長に合わせて戦略を最適化 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 border border-amber-400/20 flex items-center justify-center text-xl md:text-2xl">
                  💡
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">あなたの成長に合わせて戦略を最適化</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    毎回同じロジックで出題されるわけではありません。あなたの実力や試験までの残り日数、あなたが設定した1日に確保できる勉強時間に合わせて、<strong className="text-white">最適化した問題を計画的に出題</strong>していきます。例えば、残り日数が多い時期は知識の幅を広げ、直前期は弱点や長期間解いていない問題の集中攻撃に自動で切り替わります。
                  </p>
                </div>
              </div>
            </div>

            {/* ── ⚔️ O×と語群、それぞれの最適な始め時を判断 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-400/30 to-red-600/30 border border-red-400/20 flex items-center justify-center text-xl md:text-2xl">
                  ⚔️
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">○×と語群、それぞれの最適な始め時を判断</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    あなたの実力や試験までの残り日数、あなたが設定した1日に確保できる勉強時間に合わせて、<strong className="text-white">「今は○×に集中すべき」「そろそろ語群に着手すべき」「今は令和の問題に集中すべき」</strong>等をあなたの実力データから自動判定します。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🧠 記憶の定着度を1問ずつ9段階で追跡 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-400/30 to-purple-600/30 border border-purple-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🧠
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">記憶の定着度を1問ずつ9段階で追跡</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    単に「解けたかどうか」だけでなく、<strong className="text-white">「どのくらい覚えているか」「たまたま正解しただけではないのか？本当に定着しているのか？」</strong>を高度に分析して1問単位で記録。忘れかけた問題を最適なタイミングで復習に出します。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🔒 出題傾向に完全対応 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 border border-emerald-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🔒
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">出題傾向に完全対応</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    ここ数年の法令試験では、<strong className="text-white">90%強は令和以降に出題された過去問を使いまわして出題、10%弱は平成に出題された過去問から繰り返し出題</strong>されます。その出題傾向を完全に踏まえた上で、あなた専用の最適な戦略を提案していきます。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🔄 問題の順番を徹底的に効率化 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cyan-400/30 to-cyan-600/30 border border-cyan-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🔄
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">問題の順番を徹底的に効率化</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    関連問題を連続して出題すべきタイミングと、解く順番をシャッフルすべきタイミングを高度に分析して最適化。<strong className="text-white">進捗の低いジャンルでは関連問題を連続出題して記憶の早期定着を図りつつ、進捗率の高いジャンルは出題順をシャッフルして「順番で覚えてしまう」落とし穴を防ぎます。</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🔬 カスタマイズ出題機能 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 border border-indigo-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🔬
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">カスタマイズ出題機能</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    高度分析最適化モードとは別に、ユーザーの好みにカスタマイズして出題する機能も搭載。
                    <strong className="text-white">一度も手を付けたことのない問題を優先する、前回不正解だった問題を優先する、最近解いていない問題を優先する、令和元年以降に出題された問題を優先する</strong>、ユーザー平均正答率が高いor低い問題を優先する、3連続で正解している問題は除外する、関連する問題を連続して出題する——といった様々な高度なカスタマイズに対応しています。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 📊 合格可能性をリアルタイムで表示 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-sky-400/30 to-sky-600/30 border border-sky-400/20 flex items-center justify-center text-xl md:text-2xl">
                  📊
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">合格可能性をリアルタイムで表示</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    「今の実力で本番を受けたら何点取れるか？」だけではなく、<strong className="text-white">「このままのペースで勉強すれば合格できそうか？」</strong>を高度な分析から常に最新値を算出。合格ラインまであと何点か、このままの学習ペースで良いのかが一目でわかります。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🏆 模擬試験×全国ランキング×合格判定 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 border border-yellow-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🏆
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">模擬試験 × 全国ランキング × 合格判定</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    本番と完全に同じ構成・同じ制限時間で実施する模擬試験で試験当日の感覚を鍛えます。
                    また、模擬試験のスコアで全国の受験者と順位を競い、<strong className="text-white">合格可能性をSSS〜Fの9段階でリアルタイム判定。</strong>他の受験者の進捗やランクバッジも見えるから、「自分だけ遅れているのか」が数字でわかります。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🏆 合格ラインに特化した設計 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-400/30 to-orange-600/30 border border-orange-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🏆
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">合格ラインに特化した設計</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    45点中41点（一般地域は40点中36点）という合格基準に合わせ、<strong className="text-white">「4問しかミスできない」前提の学習戦略</strong>を組みます。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 📖 曖昧問題｜根拠付き解答徹底解説 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 border border-amber-400/20 flex items-center justify-center text-xl md:text-2xl">
                  📖
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">曖昧問題｜根拠付き解答徹底解説</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    条文を読んでも答えが割れる問題。他の問題集では「解説なし」「回答不能」「根拠のない別解答」。
                    このアプリは、<strong className="text-white">「出題者がどちらの答えを想定しているのか？」その思考ロジックと根拠まで徹底解剖</strong>して解説します。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🎯 語群選択｜オール選択肢方式対応 ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-400/30 to-purple-600/30 border border-purple-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🎯
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">語群選択｜オール選択肢方式対応</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    本番と同じ10個の選択肢（一般地域は20個の選択肢）の通常選択肢モードに加えて、その条文で過去に出題された<strong className="text-white">選択肢すべて（30〜40個）から解答するオール選択肢モード</strong>も搭載。「処置」と「措置」、「事由」と「理由」——一文字違いが並ぶ中で正解を選べるか。消去法が通用しない環境で鍛えるから、本番の10個が楽になります。
                  </p>
                </div>
              </div>
            </div>

            {/* ── 🎧 音声学習モード ── */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-rose-400/30 to-rose-600/30 border border-rose-400/20 flex items-center justify-center text-xl md:text-2xl">
                  🎧
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">音声学習モード｜乗務中も、勉強時間にする</h3>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                    問題文→思考時間→正解→解説を自動読み上げ。<strong className="text-white">乗務中・通勤中の「ながら学習」で、1日の隙間時間すべてが勉強時間に変わります。</strong>語群の条文読み上げにも対応。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
