export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
              <span className="text-xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Portfolio Value
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                $1,240.50
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">
                +2.4% today
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
              <span className="text-xl">📈</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Monthly Returns
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                14.2%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Avg. per month
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
              <span className="text-xl">🎯</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Active Investments
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Plans invested in
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-full">
              <span className="text-xl">📅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Next Payout
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Jul 15, 2024
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                In 15 days
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Recent Activity
            </h3>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">
              View all
            </a>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <span className="text-sm">💰</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Invested $100 in Starter Plan
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
                <span className="text-sm">📈</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Earned $12.50 returns
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  5 days ago
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <span className="text-sm">📊</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Portfolio rebalanced
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 week ago
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow border">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Investment Plans
            </h3>
            <a href="/investment-plans" className="text-sm text-blue-600 hover:text-blue-500 dark:hover:text-blue-400">
              Browse all
            </a>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="shrink-0 h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    Starter Plan
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $100 invested • 8-10% expected return
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="shrink-0 h-10 w-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    Growth Plan
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $500 invested • 12-15% expected return
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200">
                      Active
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="shrink-0 h-10 w-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <span className="text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    Accelerator Plan
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $250 invested • 18-22% expected return
                  </p>
                  <div className="mt-2 flex items-center">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};