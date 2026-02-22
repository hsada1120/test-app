"use client";

import { useState, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  カウントダウンタイマー                                              */
/* ------------------------------------------------------------------ */
function CountdownTimer({
  targetDate,
  compact,
}: {
  targetDate: string;
  compact?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();
    const update = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) return <div className={compact ? "h-10" : "h-20"} />;

  if (compact) {
    return (
      <span className="inline-flex gap-2 font-mono font-bold text-white text-lg md:text-2xl">
        {timeLeft.days > 0 && (
          <span>
            {timeLeft.days}
            <span className="text-sm md:text-base font-normal opacity-80">日</span>
          </span>
        )}
        <span>
          {String(timeLeft.hours).padStart(2, "0")}
          <span className="text-sm md:text-base font-normal opacity-80">:</span>
          {String(timeLeft.minutes).padStart(2, "0")}
          <span className="text-sm md:text-base font-normal opacity-80">:</span>
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </span>
    );
  }

  return (
    <div className="flex gap-3 justify-center">
      {[
        { v: timeLeft.days, l: "日" },
        { v: timeLeft.hours, l: "時間" },
        { v: timeLeft.minutes, l: "分" },
        { v: timeLeft.seconds, l: "秒" },
      ].map((item) => (
        <div
          key={item.l}
          className="bg-[#1a2744] text-white rounded-lg px-3 md:px-5 py-3 min-w-[64px] md:min-w-[76px] text-center"
        >
          <div className="text-2xl md:text-3xl font-bold font-mono">
            {String(item.v).padStart(2, "0")}
          </div>
          <div className="text-xs mt-1 opacity-70">{item.l}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  共通レイアウトコンポーネント                                         */
/* ------------------------------------------------------------------ */
function Section({
  children,
  bg = "white",
  id,
}: {
  children: React.ReactNode;
  bg?: "white" | "gray" | "navy";
  id?: string;
}) {
  const cls =
    bg === "gray"
      ? "bg-[#f5f6f8]"
      : bg === "navy"
        ? "bg-[#0f1d38] text-white"
        : "bg-white";
  return (
    <section id={id} className={`py-20 md:py-28 ${cls}`}>
      <div className="max-w-3xl mx-auto px-5 md:px-8">{children}</div>
    </section>
  );
}

function SectionHeading({
  children,
  white,
}: {
  children: React.ReactNode;
  white?: boolean;
}) {
  return (
    <h2
      className={`text-[22px] md:text-[28px] font-bold mb-12 text-center leading-snug ${white ? "text-white" : ""}`}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[16px] md:text-[18px] leading-[2] md:leading-[2.2] space-y-5 text-[#2a2a2a]">
      {children}
    </div>
  );
}

function Closing({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg md:text-xl font-bold mt-10 pt-8 border-t border-gray-200 text-center leading-relaxed">
      {children}
    </p>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
      <h3 className="text-[16px] md:text-[17px] font-bold mb-2 text-[#1a2744]">
        {title}
      </h3>
      <p className="text-[14px] md:text-[15px] leading-relaxed text-[#555]">
        {desc}
      </p>
    </div>
  );
}

function PremiumFeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 md:p-6">
      <h3 className="text-[16px] md:text-[17px] font-bold mb-2 text-white">
        {title}
      </h3>
      <p className="text-[14px] md:text-[15px] leading-relaxed text-white/80">
        {desc}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  プラン選択（再利用コンポーネント）                                    */
/* ------------------------------------------------------------------ */
const CAMPAIGN_END = "2026-03-13T00:00:00+09:00";

function PlanSelection({ id }: { id?: string }) {
  return (
    <Section bg="white" id={id}>
      <p className="text-center text-xs md:text-sm font-bold tracking-widest text-[#2a5298] mb-4">
        全国個人タクシー法令試験研究所 監修
      </p>
      <SectionHeading>
        あなたに合ったプランを選んでください。
      </SectionHeading>

      {/* キャンペーン表示 */}
      <div className="text-center mb-10">
        <p className="text-sm md:text-base font-bold text-[#2a5298] mb-1">
          2026年7月試験完全対応 最新版リリース記念
        </p>
        <p className="text-lg md:text-xl font-bold text-[#b91c1c] mb-5">
          特別価格 50%OFF 終了まで
        </p>
        <CountdownTimer targetDate={CAMPAIGN_END} />
      </div>

      {/* プラン比較カード */}
      <div className="grid md:grid-cols-3 gap-5 md:gap-4">
        {/* ── スタンダード 90日 ── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-7 flex flex-col">
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-[#888] tracking-widest mb-1">
              STANDARD
            </p>
            <h3 className="text-xl font-bold mb-1">スタンダード</h3>
            <p className="text-sm text-[#888]">90日間</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-[15px] text-[#888] line-through leading-snug">
              定価 ¥19,800
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="bg-[#b91c1c] text-white text-xs font-bold px-2 py-0.5 rounded">
                50%OFF
              </span>
            </div>
            <p className="text-3xl font-bold mt-1">
              ¥9,900
              <span className="text-xs font-normal text-[#888] ml-1">
                （税込）
              </span>
            </p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed mb-6 flex-1">
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              共通機能15種すべて利用可能
            </li>
            <li className="text-xs text-[#aaa] ml-6 -mt-1">
              分析最適化学習 / 模試ノーマル / 音声学習 / ランキング / 合格判定ランク 他
            </li>
            <li className="flex items-start gap-2 mt-2 text-[#ccc]">
              <span className="shrink-0 mt-0.5">&mdash;</span>
              模擬試験ハード・レジェンドモード
            </li>
            <li className="flex items-start gap-2 text-[#ccc]">
              <span className="shrink-0 mt-0.5">&mdash;</span>
              語群オール選択肢方式
            </li>
            <li className="flex items-start gap-2 text-[#ccc]">
              <span className="shrink-0 mt-0.5">&mdash;</span>
              質問機能
            </li>
            <li className="flex items-start gap-2 text-[#ccc]">
              <span className="shrink-0 mt-0.5">&mdash;</span>
              メモ・しおり機能
            </li>
            <li className="flex items-start gap-2 text-[#ccc]">
              <span className="shrink-0 mt-0.5">&mdash;</span>
              合格保証
            </li>
          </ul>
          <div>
            <button
              disabled
              className="w-full py-3.5 rounded-lg border-2 border-gray-300 text-gray-400 font-bold cursor-not-allowed"
            >
              このプランを選ぶ
            </button>
            <p className="text-xs text-center text-[#d97706] font-bold mt-2 leading-relaxed">
              2026年7月試験対応 最新版
              <br />
              3月10日リリース予定！
            </p>
          </div>
        </div>

        {/* ── プレミアム 90日 ── */}
        <div className="bg-white rounded-xl border-2 border-[#1a2744] p-6 md:p-7 flex flex-col relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1a2744] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            試験日が近い方に
          </div>
          <div className="text-center mb-6 mt-2">
            <p className="text-xs font-bold text-[#2a5298] tracking-widest mb-1">
              PREMIUM
            </p>
            <h3 className="text-xl font-bold mb-1">プレミアム</h3>
            <p className="text-sm text-[#888]">90日間</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-[15px] text-[#888] line-through leading-snug">
              定価 ¥27,800
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="bg-[#b91c1c] text-white text-xs font-bold px-2 py-0.5 rounded">
                50%OFF
              </span>
            </div>
            <p className="text-3xl font-bold text-[#1a2744] mt-1">
              ¥13,900
              <span className="text-xs font-normal text-[#888] ml-1">
                （税込）
              </span>
            </p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed mb-6 flex-1">
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              共通機能15種すべて利用可能
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>模擬試験ハード＆レジェンドモード</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>語群オール選択肢方式</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>質問機能</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>メモ・しおり機能</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>出題優先オプション</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b91c1c] shrink-0 mt-0.5 font-bold">
                &#10003;
              </span>
              <strong className="text-[#b91c1c]">合格保証付き</strong>
            </li>
          </ul>
          <div>
            <button
              disabled
              className="w-full py-3.5 rounded-lg bg-gray-300 text-gray-500 font-bold cursor-not-allowed"
            >
              このプランを選ぶ
            </button>
            <p className="text-xs text-center text-[#d97706] font-bold mt-2 leading-relaxed">
              2026年7月試験対応 最新版
              <br />
              3月10日リリース予定！
            </p>
          </div>
        </div>

        {/* ── プレミアム 180日 ── */}
        <div className="bg-white rounded-xl border-2 border-[#1a2744] p-6 md:p-7 flex flex-col relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b91c1c] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            余裕を持ちたい方に
          </div>
          <div className="text-center mb-6 mt-2">
            <p className="text-xs font-bold text-[#2a5298] tracking-widest mb-1">
              PREMIUM
            </p>
            <h3 className="text-xl font-bold mb-1">プレミアム</h3>
            <p className="text-sm text-[#888]">180日間</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-[15px] text-[#888] line-through leading-snug">
              定価 ¥39,800
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="bg-[#b91c1c] text-white text-xs font-bold px-2 py-0.5 rounded">
                50%OFF
              </span>
            </div>
            <p className="text-3xl font-bold text-[#1a2744] mt-1">
              ¥19,900
              <span className="text-xs font-normal text-[#888] ml-1">
                （税込）
              </span>
            </p>
          </div>
          <ul className="space-y-2 text-sm leading-relaxed mb-6 flex-1">
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              共通機能15種すべて利用可能
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>模擬試験ハード＆レジェンドモード</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>語群オール選択肢方式</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>質問機能</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>メモ・しおり機能</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2a5298] shrink-0 mt-0.5">&#10003;</span>
              <strong>出題優先オプション</strong>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b91c1c] shrink-0 mt-0.5 font-bold">
                &#10003;
              </span>
              <strong className="text-[#b91c1c]">合格保証付き</strong>
            </li>
          </ul>
          <div>
            <button
              disabled
              className="w-full py-3.5 rounded-lg bg-gray-300 text-gray-500 font-bold cursor-not-allowed"
            >
              このプランを選ぶ
            </button>
            <p className="text-xs text-center text-[#d97706] font-bold mt-2 leading-relaxed">
              2026年7月試験対応 最新版
              <br />
              3月10日リリース予定！
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/*  メインページ                                                       */
/* ================================================================== */
export default function Home() {
  return (
    <main className="text-[#1a2744]">
      {/* ============================================================ */}
      {/* 0. トップバナー（キャンペーン告知）                             */}
      {/* ============================================================ */}
      <div className="bg-[#1a2744] text-white py-5 md:py-7 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3 md:gap-4">
          <span className="text-[11px] md:text-sm font-bold tracking-widest text-yellow-300/90 border border-yellow-300/40 px-3 py-0.5 rounded-full">
            全国個人タクシー法令試験研究所 監修
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-base sm:text-lg md:text-2xl font-bold tracking-wide">
              2026年7月試験完全対応 最新版リリース記念
            </span>
            <span className="bg-[#b91c1c] text-white text-sm md:text-lg font-bold px-4 py-1 md:px-5 md:py-1.5 rounded">
              特別価格 50%OFF
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-bold opacity-80">終了まで</span>
            <CountdownTimer targetDate={CAMPAIGN_END} compact />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 1. プロダクトショーケース                                      */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden px-5 py-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #0d1b3e 0%, #1a3a6b 40%, #2a5298 100%)",
        }}
      >
        {/* 装飾グロー */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          {/* ── ヘッドライン ── */}
          <p className="text-xs md:text-sm font-bold tracking-[.25em] text-yellow-300/90 mb-4">
            全国個人タクシー法令試験研究所 監修
          </p>
          <p className="inline-block text-[11px] md:text-sm font-bold tracking-widest bg-white/10 border border-white/20 rounded-full px-5 py-1.5 mb-6">
            2026年7月試験対応版 — まもなくリリース
          </p>

          <h2
            className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-snug md:leading-tight mb-6"
            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.4)" }}
          >
            全受験生待望の
            <br />
            個人タクシー法令試験
            <br />
            <span className="text-yellow-300">完全対策プログラム</span>
          </h2>

          {/* ── メインコピー ── */}
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

          {/* ── AI分析エンジン解説 ── */}
          <div className="max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[11px] md:text-xs font-bold tracking-[.2em] text-white/60">ANALYSIS ENGINE</span>
              <div className="h-px w-8 bg-white/30" />
            </div>

            <div className="text-[13px] sm:text-[15px] md:text-[17px] leading-[2] md:leading-[2.2] text-white/85 space-y-6 text-left md:text-center">
              <p>
                ジャンル別正答率、最終解答日、放置している問題の割合、ミスの傾向、
                <br className="hidden md:inline" />
                ○×と語群それぞれの仕上がり、出題傾向、試験までの残り日数。
                <br className="hidden md:inline" />
                <strong className="text-white">すべてを掛け合わせて、今日やるべきことを毎日最適化。</strong>
              </p>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 text-left">
                <div className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-xs font-bold text-yellow-300/80 tracking-wider mb-2">忘却検知</p>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/80">
                    正答率80%でも、最後に解いたのが3週間前なら——それは「できる問題」ではなく<strong className="text-white">「忘れかけている問題」</strong>。
                  </p>
                </div>
                <div className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-xs font-bold text-yellow-300/80 tracking-wider mb-2">直前期の自動戦略切替</p>
                  <p className="text-[13px] md:text-[15px] leading-relaxed text-white/80">
                    進捗率が高ければ記憶定着を優先。低ければタイパ重視で○×の令和問題を優先。<strong className="text-white">残り日数に応じて、戦略が自動で変わる。</strong>
                  </p>
                </div>
              </div>

              <p className="text-center">
                語群選択にいつ手をつけるかも、
                <br className="hidden md:inline" />
                ○×の仕上がりと残り日数を見て<strong className="text-white">アプリが判断する。</strong>
                <br />
                <strong className="text-white text-base md:text-lg">何を勉強するか迷う時間は、もう必要ない。</strong>
              </p>
            </div>
          </div>

          {/* ── 機能ハイライト 5枚カード ── */}
          <div className="max-w-4xl mx-auto mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-px w-8 bg-white/30" />
              <span className="text-[11px] md:text-xs font-bold tracking-[.2em] text-white/60">FEATURES</span>
              <div className="h-px w-8 bg-white/30" />
            </div>

            <div className="grid gap-4 md:gap-5">
              {/* カード1: 間違いの質を分析 */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-400/30 to-blue-600/30 border border-blue-400/20 flex items-center justify-center text-xl md:text-2xl">
                    🔬
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold mb-2">間違いの"質"を分析する</h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                      不正解を<strong className="text-white">「引っかけミス」と「理解不足」に分類</strong>して記録。
                      他ユーザーの平均正答率と照合し、「みんなも間違える難問」か「自分だけ間違える基礎問題」かを判別。
                      <strong className="text-white">間違え方が違えば、対策も違う。</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* カード2: 語群選択オール選択肢方式 */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-400/30 to-purple-600/30 border border-purple-400/20 flex items-center justify-center text-xl md:text-2xl">
                    🎯
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold mb-2">語群選択｜オール選択肢方式</h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                      本番の10個ではない。その条文で過去に出題された選択肢すべて、<strong className="text-white">30〜40個から解答。</strong>
                      「処置」と「措置」、「事由」と「理由」——一文字違いが並ぶ中で正解を選べるか。
                      <strong className="text-white">消去法が通用しない環境で鍛えるから、本番の10個が楽になる。</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* カード3: 曖昧問題 */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-amber-400/30 to-amber-600/30 border border-amber-400/20 flex items-center justify-center text-xl md:text-2xl">
                    📖
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-bold mb-2">曖昧問題｜根拠付き解答徹底解説</h3>
                    <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                      条文を読んでも答えが割れる問題。他の問題集では「解説なし」「回答不能」「根拠のない別解答」。
                      このアプリは、<strong className="text-white">「出題者がどちらの答えを想定しているのか？」その思考ロジックと根拠まで徹底解剖</strong>して解説する。
                    </p>
                  </div>
                </div>
              </div>

              {/* カード4・5 を横並び */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                {/* カード4: ランキング */}
                <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 border border-emerald-400/20 flex items-center justify-center text-xl md:text-2xl">
                      🏆
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold mb-2">全国ランキング × 合格判定</h3>
                      <p className="text-[13px] md:text-[15px] leading-relaxed text-white/75">
                        模擬試験で全国の受験者と順位を競い、合格可能性を<strong className="text-white">SSS〜Fの9段階でリアルタイム判定。</strong>
                        他の受験者の進捗やランクバッジも見えるから、「自分だけ遅れているのか」が数字でわかる。
                      </p>
                    </div>
                  </div>
                </div>

                {/* カード5: 音声学習 */}
                <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 md:p-8 text-left">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-rose-400/30 to-rose-600/30 border border-rose-400/20 flex items-center justify-center text-xl md:text-2xl">
                      🎧
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold mb-2">乗務中も、勉強時間にする</h3>
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

          {/* ── クロージングコピー ── */}
          <div className="relative max-w-2xl mx-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent mb-10" />
            <p
              className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide"
              style={{ textShadow: "1px 1px 6px rgba(0,0,0,0.3)" }}
            >
              問題を並べるだけの教材とは、
              <br />
              <span className="text-yellow-300">設計思想が違う。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 1.5. ファーストビュー（煽り）                                  */}
      {/* ============================================================ */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center px-5 py-20 md:py-28"
        style={{
          background:
            "linear-gradient(180deg, #2a5298 0%, #1a3a6b 30%, #0d1b3e 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1
            className="text-[26px] sm:text-[32px] md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight mb-10"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
          >
            次の試験で落ちたら、
            <br />
            あなたはあと何ヶ月、
            <br className="sm:hidden" />
            何年待てますか？
          </h1>
          <p className="text-[15px] sm:text-base md:text-xl leading-relaxed md:leading-loose opacity-90 max-w-2xl mx-auto mb-8">
            残り日数、あなたの弱点、あなたの習熟傾向、試験問題の傾向。
            <br className="hidden md:inline" />
            すべてを分析して合格までの最短ルートを作る、
            <br className="hidden md:inline" />
            あなた専用の法令試験対策。
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-base opacity-70 max-w-xl mx-auto mb-14 leading-relaxed">
            法人で10年以上ハンドルを握り続けてきたあなたが、
            <br className="hidden md:inline" />
            自分の看板で走るための、最後の関門を突破するために。
          </p>
          <p className="text-xs md:text-sm font-bold tracking-widest text-yellow-300/90 mb-3">
            全国個人タクシー法令試験研究所 監修
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-7 py-3 text-sm md:text-base tracking-wider">
            個人タクシー法令試験 問題集アプリ
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. 恐怖の可視化セクション                                     */}
      {/* ============================================================ */}
      <Section bg="white">
        <SectionHeading>
          不合格の本当の怖さは、
          <br />
          3ヶ月の遅れではありません。
        </SectionHeading>
        <Body>
          <p>不合格になれば、次の試験は3ヶ月後です。</p>
          <p>でも、本当に怖いのはそこではありません。</p>
          <p>
            次の試験までの3ヶ月間に、
            <br />
            一度でも事故や違反があったらどうなるか。
            <br />
            <strong className="text-[#b91c1c]">
              受験資格がそこから3年以上なくなります。
            </strong>
          </p>

          {/* ── 強調ブロック：3年後「以降」 ── */}
          <div className="bg-[#fef2f2] border-l-4 border-[#b91c1c] rounded-r-xl p-6 md:p-8 my-4">
            <p className="text-lg md:text-xl font-bold text-[#b91c1c] leading-relaxed">
              事故違反しても
              <br />
              「3年後に受けられる」、ではありません。
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#b91c1c] mt-3">
              3年後「以降」です。
            </p>
            <p className="text-base md:text-lg text-[#b91c1c] mt-4 leading-relaxed">
              そしてその3年の間にまた違反があれば、
              <br />
              さらにそこから3年以上。
            </p>
          </div>

          {/* ── 強調ブロック：永遠に ── */}
          <div className="bg-[#1a2744] rounded-xl p-6 md:p-8 my-4 text-center">
            <p className="text-lg md:text-2xl font-bold text-white leading-relaxed">
              一度落ちて待っている間に違反が重なれば、
              <br />
              <span className="text-[#f87171] text-xl md:text-[26px]">
                永遠に個人タクシーになれない可能性すらある
              </span>
              <br />
              ということです。
            </p>
          </div>

          <p>
            10年以上法人で走り続けて、
            <br />
            ようやく手にした受験資格。
            <br />
            その重みを、誰よりもあなた自身がわかっているはずです。
          </p>
          <p>
            不合格で3ヶ月遅れ、その間に違反があれば、
            <br />
            <strong>
              個人タクシーの夢そのものが遠のきます。
            </strong>
          </p>
          <p className="font-bold">
            だからこそ、次の試験は万全の体制で臨まなければなりません。
          </p>
          <Closing>
            今回の試験は、あなたが思っている以上に
            <br />
            重いチャンスです。
          </Closing>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 3. 差別化：学習プランの個別最適化                               */}
      {/* ============================================================ */}
      <Section bg="gray">
        <SectionHeading>
          問題を並べるだけの教材と、
          <br />
          あなたを分析する教材。
        </SectionHeading>
        <Body>
          <p>
            無料アプリや市販の問題集には、ある共通点があります。
            <br />
            問題と答えを並べて、「さあ解いてください」。それだけです。
          </p>
          <p>
            自分が今どこが弱いのか。
            <br />
            残りの日数で何を優先すべきなのか。
            <br />
            語群選択問題にいつから手をつけるべきなのか。
            <br />
            誰も教えてくれません。
          </p>
          <p>
            日々の乗務の合間に勉強時間を確保するのは、
            <br />
            簡単なことではありません。
            <br />
            だからこそ、<strong>限られた時間の使い方</strong>が合否を分けます。
          </p>
          <p className="text-lg md:text-xl font-bold">
            このアプリは、そこから設計思想が違います。
          </p>
          <p>
            正答率、各問題を最後に解いた日、放置している問題の割合、
            <br />
            ○×問題と語群選択問題それぞれの仕上がり具合。
            <br />
            これらに加えて、あなたの受験地域、最近の出題傾向、
            <br />
            そして試験までの残り日数。
            <br />
            <strong>
              すべてを掛け合わせて、あなただけの学習プランを毎日更新します。
            </strong>
          </p>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 my-4">
            <p className="leading-[2]">
              同じ正答率80%でも、
              <br />
              毎日コツコツ復習している人と、
              <br />
              2週間放置している問題が大量にある人では、
              <br />
              やるべきことが全く違います。
            </p>
            <p className="mt-4 leading-[2] font-bold">
              正答率80%でも、最後に解いたのが3週間前なら、
              <br />
              それは「できる問題」ではなく「忘れかけている問題」です。
            </p>
          </div>

          <p>
            試験まで余裕がある時期は弱点を集中的に攻める。
            <br />
            試験が近づいたら、新しい知識の詰め込みより
            <br />
            忘れかけている問題の記憶定着を最優先する。
            <br />
            残り日数に応じて戦略が自動で切り替わります。
          </p>
          <Closing>
            何を勉強するか迷う時間は、もう必要ありません。
          </Closing>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 4. 差別化：勉強したくなる仕組み                                */}
      {/* ============================================================ */}
      <Section bg="white">
        <SectionHeading>
          「仕方ないから勉強しよう」を、
          <br />
          「もっと勉強したい」に変える。
        </SectionHeading>
        <Body>
          <p>
            法令試験の勉強は孤独な戦いです。
            <br />
            一人で問題集に向かって、正解か不正解かを繰り返す。
            <br />
            モチベーションが続かないのは当然です。
          </p>
          <p className="font-bold">
            このアプリには、勉強を続けたくなる仕組みがあります。
          </p>
          <p>
            まず、あなたの仕上がり具合を
            <strong>SSS〜Fの9段階のランク</strong>で表示します。
            <br />
            学習を進めるごとにランクが上がり、
            <br />
            合格可能性がパーセンテージで見えるようになります。
            <br />
            自分が今どこにいるのか、合格まであとどのくらいなのか、
            <br />
            数字で答えが出ます。
          </p>
          <p>
            そして、模擬試験の結果は
            <strong>全国の受験者とランキングで競えます。</strong>
            <br />
            自分より上にいる人、追い上げてくる人。
            <br />
            ランキングに入った瞬間、順位が上がった瞬間は、
            <br />
            思わず声が出るほど嬉しいはずです。
          </p>
          <p>
            あなたのランクバッジもランキングに表示されるので、
            <br />
            進捗率が低いのにランキング上位にいる人、
            <br />
            ランクが高いのにまだ圏外の人。
            <br />
            他の受験者の状況が見えることで、
            <br />
            「自分ももっとやらなきゃ」という気持ちが自然と湧いてきます。
          </p>
          <p>
            さらに、全ジャンルの進捗率や正答率を
            <br />
            <strong>他の受験者の平均と比較できるチャート</strong>も搭載。
            <br />
            孤独に感じていた勉強に、
            <br />
            「他の人はどのくらいやっているのか」という指標が加わります。
          </p>

          <p className="text-[15px] md:text-base text-[#666] mt-8 pt-6 border-t border-gray-100 leading-relaxed text-center">
            試験までの時間は限られています。
            <br />
            不合格の先にあるリスクを考えれば、
            <br />
            今この瞬間に最善の準備を始めることが、
            <br />
            どれほど大切かわかるはずです。
          </p>

          <Closing>
            仕方ないから勉強する、ではなく、
            <br />
            ランクを上げたい、ランキングに入りたいと思えるから勉強する。
            <br />
            その差が、試験当日の結果に直結します。
          </Closing>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 5. 差別化：語群選択問題                                        */}
      {/* ============================================================ */}
      <Section bg="gray">
        <SectionHeading>
          語群選択問題。
          <br className="md:hidden" />
          10個の選択肢で練習して、
          <br />
          本番の紛らわしさに耐えられますか？
        </SectionHeading>
        <Body>
          <p>語群選択問題の配点は大きく、合否を左右します。</p>
          <p>
            市販の問題集では、毎回同じ10個の選択肢が並びます。
            <br />
            何度か解けば消去法で正解できてしまう。
            <br />
            でも本番では、「処置」と「措置」、「事由」と「理由」のように、
            <br />
            一文字違いの選択肢が並びます。
          </p>
          <p className="font-bold">
            消去法が通用しない場面で、
            <br />
            「この空欄にはこの言葉」と確信を持って答えられますか？
          </p>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 my-4">
            <p className="leading-[2]">
              このアプリの<strong>オール選択肢方式</strong>では、
              <br />
              その条文で過去に出題された全選択肢、
              <br />
              <strong>30〜40個</strong>の中から正解を選びます。
            </p>
            <p className="mt-4 leading-[2]">
              10個から選ぶのと、40個から選ぶのでは、
              <br />
              求められる力が全く違います。
              <br />
              この環境で正解できるなら、本番の10個は楽に感じるはずです。
            </p>
          </div>

          <p>
            さらに、語群に手をつけるタイミングも重要です。
            <br />
            ○×問題の土台が固まらないうちに語群を始めると、
            <br />
            どちらも中途半端になります。
            <br />
            あなたの○×の進捗率を見て、
            <br />
            <strong>
              語群に着手すべきタイミングをアプリが判断します。
            </strong>
          </p>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 6. 差別化：解説の質                                            */}
      {/* ============================================================ */}
      <Section bg="white">
        <SectionHeading>
          条文を読んでも答えが出ない問題、
          <br />
          ありませんか？
        </SectionHeading>
        <Body>
          <p>
            法令試験には、条文を読めば明確に答えが出る問題と、
            <br />
            そうではない問題があります。
          </p>
          <p>
            厳密に考えれば×になるはずなのに、
            <br />
            出題者の意図としては○が正解。
            <br />
            そういう問題が、この試験には含まれています。
          </p>
          <p>
            法律の専門家が解けば×になる問題でも、
            <br />
            個人タクシーの試験では○と答えなければ不正解になる。
            <br />
            なぜなら、出題者はその法律の知識を問うているのではなく、
            <br />
            別の規定の理解を確認しているからです。
          </p>
          <p>
            他の問題集では、こういう問題に対して
            <br />
            解説がなかったり、「回答不能」と書いてあったり、
            <br />
            根拠もなく全く違う答えが載っていたりします。
          </p>
          <div className="bg-[#f5f6f8] rounded-xl p-6 md:p-8 border border-gray-200 my-4">
            <p className="leading-[2]">
              このアプリでは、そういう
              <strong>曖昧な問題こそ徹底的に解説</strong>します。
            </p>
            <p className="mt-4 leading-[2]">
              「なぜ出題者はこの問題で○を想定しているのか」
              <br />
              「どういうロジックで考えれば正解に辿り着くのか」
            </p>
            <p className="mt-4 leading-[2]">
              過去問の出題傾向とテキストの取扱範囲を分析した上で、
              <br />
              <strong>推定根拠まで含めて解説</strong>しています。
            </p>
          </div>
          <p>
            受験生が行き詰まるところ、疑問に感じるところ、
            <br />
            他の問題集では放置されているところ。
            <br />
            そこに徹底的に手が届く解説を、全問題に用意しました。
          </p>
          <Closing>
            答えが合っているかどうかを心配する時間は、
            <br />
            もう勉強に使ってください。
          </Closing>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 7. 機能概要                                                    */}
      {/* ============================================================ */}
      <Section bg="gray">
        <SectionHeading>
          合格に必要なすべてを、一つのアプリに。
        </SectionHeading>
        <Body>
          <p className="text-center mb-8">
            あなた専用の学習プランを毎日更新。
            <br />
            曖昧な問題も推定根拠付きで徹底解説。
            <br />
            本番より厳しい模擬試験で実力を鍛え、
            <br />
            全国の受験者とランキングで競い合う。
            <br />
            乗務の合間も、音声学習で無駄にしない。
          </p>
          <p className="text-center font-bold text-lg md:text-xl">
            問題を解くだけのアプリではありません。
            <br />
            あなたを合格に導くために設計された、
            <br />
            すべてが揃った学習環境です。
          </p>
          <p className="text-center text-[15px] text-[#888] mt-8">
            全機能の詳細はこのページの後半でご紹介しています。
          </p>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 8. 価格・合格保証                                              */}
      {/* ============================================================ */}
      <Section bg="white">
        <SectionHeading>
          たった1日の手取りで、合格が近づくとしたら。
        </SectionHeading>
        <Body>
          <p>
            このアプリの価格は、
            <br />
            法人タクシーの手取りに換算するとおよそ1日分です。
            <br />
            たった1日分の手取りで、
            <br />
            個人タクシーとしての未来が確実に近づきます。
          </p>
          <p>
            数千円の問題集や無料アプリもあります。
            <br />
            それで十分だと感じている方には、
            <br />
            このアプリは必要ありません。
          </p>
          <p>
            ただ、あなたがこのページを読んでいるのは、
            <br />
            <strong>それでは不安だからではないでしょうか。</strong>
          </p>

          <div className="bg-[#f5f6f8] rounded-xl p-6 md:p-8 border border-gray-200 my-4 text-center">
            <p className="leading-relaxed">
              不合格で3ヶ月遅れた場合の機会損失は約180万円。
              <br />
              その間に違反があれば、
              <br />
              <strong>
                個人タクシーという夢そのものが遠のきます。
              </strong>
            </p>
            <p className="leading-relaxed mt-3">
              毎日お客様を乗せて走りながら、
              <br />
              いつか自分の看板で走りたいと思い続けてきた。
              <br />
              その夢を、たった1日分の手取りで前に進められるとしたら。
            </p>
          </div>

          <p className="font-bold">
            このアプリは、
            <br />
            今回の試験で絶対に合格したい方のために作りました。
          </p>
          <p className="font-bold text-lg md:text-xl">そして、約束します。</p>

          <div className="bg-[#f5f6f8] rounded-xl p-6 md:p-8 border border-gray-200 my-4">
            <p className="font-bold text-lg md:text-xl mb-4 text-[#1a2744]">
              万が一不合格だった場合、
              <br />
              以下のどちらかをあなた自身が選ぶことができます。
            </p>
            <div className="space-y-3 ml-2">
              <p className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1a2744] text-white text-sm font-bold shrink-0 mt-0.5">
                  1
                </span>
                <span className="leading-relaxed">
                  お支払い金額の<strong>全額を返金</strong>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1a2744] text-white text-sm font-bold shrink-0 mt-0.5">
                  2
                </span>
                <span className="leading-relaxed">
                  次の試験に向けて、
                  <strong>90日間の利用期間を無料で延長</strong>
                </span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl font-bold text-center">
            つまり、あなたのリスクはゼロです。
          </p>
          <p>
            合格すれば、1日分の手取りは
            <br />
            安すぎる投資だったと感じるはずです。
            <br />
            不合格でも、お金は戻るか、次の試験まで使い続けられる。
            <br />
            どちらに転んでも、あなたが損をすることはありません。
          </p>
          <p>
            しかも、このアプリをしっかり使って落ちる人は
            <br />
            まずいません。
            <br />
            合格保証をつけているのは、
            <br />
            <strong>それだけの自信があるからです。</strong>
          </p>
        </Body>
      </Section>

      {/* ============================================================ */}
      {/* 8.5 プラン選択（1回目：共通機能の前）                            */}
      {/* ============================================================ */}
      <PlanSelection id="plans-top" />

      {/* ============================================================ */}
      {/* 9. 共通機能（スタンダード・プレミアム共通）                      */}
      {/* ============================================================ */}
      <Section bg="gray" id="features-common">
        <SectionHeading>
          すべてのプランに搭載。
          <br />
          合格のための15の機能。
        </SectionHeading>
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          <FeatureCard
            title="高度分析最適化モード"
            desc="あなたの進捗率・正答率・試験までの残り日数を独自のアルゴリズムで分析し、今日やるべき学習パターンを複数提案。「何をどの順番で解くか」をもう自分で考える必要はありません。"
          />
          <FeatureCard
            title="模擬試験ノーマルモード"
            desc="本番と同じ構成（○×40問＋語群1題＝45点満点）・同じ制限時間で実施。ジャンル別の採点内訳で弱点が一目瞭然。タイマーが刻む緊張感が、本番の平常心を作ります。"
          />
          <FeatureCard
            title="通常学習モード（○×・語群）"
            desc="ジャンル・難易度・問題数を自由に組み合わせて出題。完全ランダムだから「ページ順で答えを覚える」リスクはゼロ。解答直後に正解・解説・条文がその場で表示されます。"
          />
          <FeatureCard
            title="音声学習モード"
            desc="問題文→思考時間→正解→解説を自動読み上げ。乗務中・通勤中の「ながら学習」で、1日の隙間時間すべてが勉強時間に変わります。語群の条文読み上げや語呂合わせBGMにも対応。"
          />
          <FeatureCard
            title="復習機能（間違えた問題の自動抽出）"
            desc="間違えた問題をワンタップで再出題。間違えた瞬間に自動記録されるため、自分でチェックし直す手間はゼロ。解説・条文・メモもセットで復習でき、弱点が確実に潰れます。"
          />
          <FeatureCard
            title="学習状況ダッシュボード"
            desc="ジャンル別・問題種別ごとの進捗率と正答率をグラフで可視化。先週比の上昇・下降も一目でわかり、合格までに何が足りないかが常に数値で明確です。"
          />
          <FeatureCard
            title="レーダーチャート＋統計分析"
            desc="全ジャンルの進捗率・正答率を他ユーザー平均と重ねたレーダーチャートで表示。自分だけでは気づけない「相対的な弱点」が浮かび上がります。"
          />
          <FeatureCard
            title="ランキング機能（TOP30）"
            desc="地域別×モード別で全国の受験者と競えます。ランクインや自己最高記録更新時にはお祝いポップアップも。孤独な勉強に「負けたくない」という熱を注入します。"
          />
          <FeatureCard
            title="条文全文ワンタップ表示"
            desc="解説画面からワンタップで該当条文の全文を展開。問題→解説→条文原文が1画面で完結し、「なぜこの答えなのか」を根拠レベルで理解できます。"
          />
          <FeatureCard
            title="合格判定ランク（SSS〜F）"
            desc="あなたの進捗と残り日数から合格可能性をSSS〜Fの9段階で判定。「このペースで間に合うのか」が常に数値で確認でき、漠然とした不安が具体的な行動に変わります。"
          />
          <FeatureCard
            title="誤答理由の記録と絞り込み"
            desc="不正解時に「引っかけミス」か「理解不足」かを記録。理由ごとに絞り込み出題できるため、間違いの質に踏み込んだ学習で弱点を正確に潰せます。"
          />
          <FeatureCard
            title="他ユーザー平均正答率＋自動難易度判定"
            desc="各問題に他ユーザーの平均正答率を表示。「みんなも間違える難問」か「自分だけ間違える基礎問題」かが一目瞭然。難易度は★☆☆〜★★★で自動分類されます。"
          />
          <FeatureCard
            title="関連問題の優先出題"
            desc="紛らわしい条文の違いを集中的に比較学習。混同しやすい問題をまとめて出題し、「なんとなくの理解」を「明確な区別」に変えます。"
          />
          <FeatureCard
            title="模擬試験カスタマイズ"
            desc="○×の問題数・語群の選択肢数・制限時間を自由に変更可能。自分だけのトレーニングメニューを組めます。カスタマイズ模試は通常ランキングとは別管理です。"
          />
          <FeatureCard
            title="3地域完全対応"
            desc="特定指定・指定・一般の全3地域に対応し、地域ごとの出題構成（問題数・選択肢数・合格ライン・制限時間）を完全再現。設定を切り替えるだけで全地域の学習・模試が可能です。"
          />
        </div>
      </Section>

      {/* ============================================================ */}
      {/* 10. プレミアムプラン限定機能                                    */}
      {/* ============================================================ */}
      <section
        id="features-premium"
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(160deg, #0d1b3e 0%, #162d55 50%, #1a3a6b 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <SectionHeading white>
            本気で一発合格を狙うなら。
            <br />
            プレミアム限定の9つの機能。
          </SectionHeading>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <PremiumFeatureCard
              title="模擬試験ハードモード"
              desc="本番より厳しい出題構成で実施。○×は易問わずか3問・標準12問・残り全て難問、語群はオール選択肢方式。この環境で鍛えれば、本番に余裕が生まれます。"
            />
            <PremiumFeatureCard
              title="模擬試験レジェンドモード"
              desc="あなたの弱点だけで構成された最高難度の模試。正答率が低い問題のうち、最近解いていない問題を優先して出題。苦手から逃げない、最も効率的な克服法です。"
            />
            <PremiumFeatureCard
              title="語群選択：オール選択肢方式"
              desc="通常10〜20個の選択肢が、その条文に紐づく過去の全選択肢（30〜40個）に。消去法が通用しない環境で、正確な知識だけが頼りになります。"
            />
            <PremiumFeatureCard
              title="質問機能"
              desc="解説に疑問があれば、その問題に紐づけて運営に直接質問を送信。回答はアプリ内に表示され、メール通知にも対応。疑問を残さず次に進めます。"
            />
            <PremiumFeatureCard
              title="合格保証"
              desc="所定条件を満たして不合格の場合、全額返金または90日間の利用延長を選択可能。あなたの挑戦を最後まで支えます。"
            />
            <PremiumFeatureCard
              title="メモ機能"
              desc="各問題の解説画面に自分だけのメモを記録。覚え方や注意点を問題ごとに残せて、次回解答時にもそのまま表示されます。"
            />
            <PremiumFeatureCard
              title="しおり機能"
              desc="気になる問題にしおりマークをつけ、しおり付き問題だけに絞って出題可能。試験直前の重点復習リストとして、自分だけの弱点集を作れます。"
            />
            <PremiumFeatureCard
              title="最近解いていない問題を優先"
              desc="長期間放置している問題を自動で拾い上げて優先出題。「一度できた問題」が「忘れた問題」になる前に、知識の抜け漏れを防ぎます。"
            />
            <PremiumFeatureCard
              title="令和元年以降の出題を優先"
              desc="近年の試験で実際に出題された問題を優先出題。最新の出題傾向に沿った効率的な学習で、試験に出やすい問題に集中できます。"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. プラン選択（2回目：プレミアム機能の後）                      */}
      {/* ============================================================ */}
      <PlanSelection id="plans" />

      {/* ============================================================ */}
      {/* 12. 最後の一押し                                               */}
      {/* ============================================================ */}
      <section
        className="py-20 md:py-28 px-5"
        style={{
          background:
            "linear-gradient(160deg, #0d1b3e 0%, #1a3a6b 40%, #2a5298 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-[22px] md:text-[28px] font-bold mb-12 leading-snug">
            手取り1日分。リスクはゼロ。
            <br />
            あとは始めるだけです。
          </h2>
          <div className="text-[15px] md:text-[18px] leading-[2] md:leading-[2.2] space-y-5 opacity-95">
            <p>
              次の試験に落ちれば、3ヶ月の遅れ。
              <br />
              その間に事故や違反があれば、
              <br />
              個人タクシーという夢は、
              <br />
              さらに遠くなります。
            </p>
            <p>
              営業収入がそのまま自分の収入になる。
              <br />
              自分のペースで、自分の判断で走れる。
              <br />
              その未来を手に入れるための投資は、手取りたった1日分。
              <br />
              しかも不合格なら全額返金。
            </p>
            <p className="text-lg md:text-xl font-bold">
              失うものは何もありません。
              <br />
              得られるものは、合格への確実な道筋です。
            </p>
            <p>
              試験日は変えられません。
              <br />
              でも、今日から始めれば、まだ間に合います。
            </p>
          </div>

          <div className="mt-14">
            <div className="inline-block bg-white text-[#1a2744] text-lg md:text-xl font-bold px-10 md:px-14 py-4 md:py-5 rounded-xl shadow-lg">
              今すぐ学習を始める
            </div>
            <p className="mt-6 text-sm md:text-base opacity-90 font-bold leading-relaxed">
              2026年7月試験対応の最新版は
              <br className="md:hidden" />
              2026年3月10日リリース予定です！
              <br />
              もう少しだけお待ちください！
            </p>
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
