export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '900px'
      }}>
        <h1 style={{ 
          fontSize: '72px', 
          fontWeight: 'bold',
          marginBottom: '30px',
          textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
          letterSpacing: '2px'
        }}>
          個人タクシー試験対策
        </h1>
        
        <p style={{ 
          fontSize: '28px',
          marginBottom: '50px',
          fontWeight: '600',
          background: 'rgba(255,255,255,0.1)',
          padding: '15px 30px',
          borderRadius: '50px',
          display: 'inline-block'
        }}>
          令和8年（2026年）7月試験 完全対応版
        </p>

        <div style={{
          fontSize: '20px',
          lineHeight: '1.8',
          marginBottom: '60px',
          opacity: 0.95
        }}>
          <p style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
            過去20年分を徹底網羅。わかりやすい解説で確実な合格をサポート。
          </p>
          <p style={{ marginBottom: '15px' }}>
            ✓ 全地域対応（特別指定・指定・一般地域）
          </p>
          <p style={{ marginBottom: '15px' }}>
            ✓ ○×問題800問・語群選択問題800問を完全収録
          </p>
          <p style={{ marginBottom: '15px' }}>
            ✓ 本番形式の模擬試験で実力を確認
          </p>
          <p style={{ marginBottom: '15px' }}>
            ✓ 弱点を自動分析。あなただけの学習プランを提案
          </p>
        </div>

        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          background: 'rgba(255,215,0,0.9)',
          color: '#1e3c72',
          padding: '20px 50px',
          borderRadius: '10px',
          display: 'inline-block',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
        }}>
          2026年3月 リリース決定！
        </div>
      </div>
    </div>
  );
}