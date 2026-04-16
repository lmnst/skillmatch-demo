
export default function Page() {
  // 💡 提示：在这里填入你真实创建的 Tally 表单链接
  const TALLY_FORM_URL = "https://tally.so/r/ODB71Y"

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] text-slate-500 uppercase">TrueMatch</div>
            <div className="text-lg font-semibold">AI hiring for real skills</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#problem" className="hover:text-slate-900">The Problem</a>
            <a href="#how" className="hover:text-slate-900">How it works</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Book a demo
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-wide text-emerald-700">
            Now available in Early Access
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
            Hire for what people can do, not what their CV happens to say.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            TrueMatch helps recruiting teams screen candidates by relevant skills instead of relying only on job titles or CV keywords. Build clearer shortlists, reduce manual triage, and focus recruiter time where it matters most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Book a demo
            </a>
            <a
              href="#how"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              See how it works
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-semibold text-slate-950">Faster</div>
              <div>Shortlisting workflow</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-950">Clearer</div>
              <div>Skill-based evaluation</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-950">Less</div>
              <div>Keyword noise</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="mb-4 text-sm font-medium text-slate-500">Why teams switch to TrueMatch</div>
          <div className="space-y-4">
            {[
              ['Reduce false positives', 'Stop spending time on candidates who look strong on paper but are not the right match for the role.'],
              ['Uncover overlooked talent', 'Identify candidates from non-traditional backgrounds whose skills align with the actual role requirements.'],
              ['Save screening time', 'Structure inbound pipelines faster so recruiters can focus on the most relevant profiles.'],
              ['Support fairer decisions', 'Use more consistent criteria in early-stage screening and reduce reliance on vague signals.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-white p-4">
                <div className="font-medium text-slate-950">{title}</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">The problem</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Most hiring funnels still optimize for the wrong signal.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Traditional recruiting workflows over-index on keywords, prestigious company names, and years on paper. That creates noise for teams and unfair filtering for candidates.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['CV keyword filtering', 'Strong candidates get missed completely simply because their wording does not match the ATS search pattern.'],
              ['Slow shortlist creation', 'Teams spend too much time manually triaging hundreds of applicants before real evaluation even begins.'],
              ['Weak candidate experience', 'Applicants get ghosted or rejected without understanding how their actual skills were assessed.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">How it works</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A smarter workflow for modern recruiting teams.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Define the role requirements', 'Start with the job description and core role criteria so the screening process reflects what success actually looks like.'],
            ['02', 'Screen candidates by skill match', 'TrueMatch evaluates candidates against the role requirements using structured signals instead of relying on keyword matching alone.'],
            ['03', 'Review the Shortlist', 'Get a ranked list of candidates based purely on capability match, complete with actionable summaries for the hiring manager.'],
          ].map(([step, title, body]) => (
            <div key={step} className="rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-400">{step}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Features</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Built to plug right into your existing stack.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ['Workflow-friendly setup', 'Designed to fit into existing recruiting workflows and ATS-based processes.'],
              ['Custom skill criteria', 'Define role-specific skill expectations so screening reflects how your team actually hires.'],
              ['Explainable recommendations', 'Every recommendation is paired with a clear rationale so recruiters can review results with context.'],
              ['Consistent early screening', 'Support more consistent early-stage screening by focusing attention on role-relevant signals.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">FAQ</div>
          <div className="mt-8 space-y-4">
            {[
              ['Does TrueMatch replace my ATS?', 'No. TrueMatch is designed to support existing recruiting workflows rather than replace them.'],
              ['How are candidate recommendations generated?', 'TrueMatch evaluates candidates against structured role requirements and presents summaries that help recruiters review potential fit more efficiently.'],
              ['Can recruiters still make the final decision?', 'Yes. The product is designed to support human decision-making, not replace it.'],
              ['Is this suitable for smaller hiring teams?', 'Yes. The workflow is intended to be lightweight enough for small and mid-sized teams that want more structure without adding heavy operational overhead.'],
            ].map(([q, a]) => (
              <div key={q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Get Started</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Ready to improve hiring decisions?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            See how a more structured, skill-based screening workflow can help teams shortlist candidates more clearly.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Book a demo
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Takes 2 minutes to book. See the product in action.</p>
        </div>
      </section>
    </main>
  )
}